const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from parent directory
app.use(express.static(path.join(__dirname, '..')));

// Create data directory if it doesn't exist
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
}

// Contact form submission endpoint
app.post('/api/contact', (req, res) => {
    const { name, email, subject, message } = req.body;
    
    // Validation
    if (!name || !email || !subject || !message) {
        return res.status(400).json({
            success: false,
            message: 'All fields are required'
        });
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({
            success: false,
            message: 'Invalid email address'
        });
    }
    
    // Create contact entry
    const contact = {
        id: Date.now(),
        name,
        email,
        subject,
        message,
        timestamp: new Date().toISOString(),
        read: false
    };
    
    // Save to file
    const contactsFile = path.join(dataDir, 'contacts.json');
    let contacts = [];
    
    try {
        if (fs.existsSync(contactsFile)) {
            const data = fs.readFileSync(contactsFile, 'utf8');
            contacts = JSON.parse(data);
        }
    } catch (error) {
        console.error('Error reading contacts file:', error);
    }
    
    contacts.push(contact);
    
    try {
        fs.writeFileSync(contactsFile, JSON.stringify(contacts, null, 2));
        
        res.status(200).json({
            success: true,
            message: 'Thank you for contacting us! We will get back to you soon.',
            contactId: contact.id
        });
    } catch (error) {
        console.error('Error saving contact:', error);
        res.status(500).json({
            success: false,
            message: 'An error occurred while saving your message. Please try again.'
        });
    }
});

// Get all contacts (admin endpoint - should be protected in production)
// TODO: Add authentication middleware before deploying to production
app.get('/api/contacts', (req, res) => {
    // SECURITY WARNING: This endpoint is not protected and should not be exposed in production
    // Implement authentication (JWT, API keys, or session-based auth) before deployment
    const contactsFile = path.join(dataDir, 'contacts.json');
    
    try {
        if (fs.existsSync(contactsFile)) {
            const data = fs.readFileSync(contactsFile, 'utf8');
            const contacts = JSON.parse(data);
            res.json({ success: true, contacts });
        } else {
            res.json({ success: true, contacts: [] });
        }
    } catch (error) {
        console.error('Error reading contacts:', error);
        res.status(500).json({
            success: false,
            message: 'Error retrieving contacts'
        });
    }
});

// Newsletter subscription endpoint
app.post('/api/newsletter', (req, res) => {
    const { email } = req.body;
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({
            success: false,
            message: 'Invalid email address'
        });
    }
    
    const subscriber = {
        email,
        timestamp: new Date().toISOString()
    };
    
    const subscribersFile = path.join(dataDir, 'subscribers.json');
    let subscribers = [];
    
    try {
        if (fs.existsSync(subscribersFile)) {
            const data = fs.readFileSync(subscribersFile, 'utf8');
            subscribers = JSON.parse(data);
            
            // Check if already subscribed
            if (subscribers.some(sub => sub.email === email)) {
                return res.status(400).json({
                    success: false,
                    message: 'This email is already subscribed'
                });
            }
        }
    } catch (error) {
        console.error('Error reading subscribers file:', error);
    }
    
    subscribers.push(subscriber);
    
    try {
        fs.writeFileSync(subscribersFile, JSON.stringify(subscribers, null, 2));
        
        res.status(200).json({
            success: true,
            message: 'Successfully subscribed to newsletter!'
        });
    } catch (error) {
        console.error('Error saving subscriber:', error);
        res.status(500).json({
            success: false,
            message: 'An error occurred. Please try again.'
        });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        timestamp: new Date().toISOString()
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`SeamX Backend Server running on port ${PORT}`);
    console.log(`API available at http://localhost:${PORT}/api`);
});
