# SeamX Backend API

This is a simple Node.js/Express backend for the SeamX website.

## Features

- Contact form submission handling
- Newsletter subscription management
- Data persistence with JSON files
- CORS enabled for frontend integration
- Form validation

## Installation

```bash
cd backend
npm install
```

## Running the Server

### Development mode (with auto-reload):
```bash
npm run dev
```

### Production mode:
```bash
npm start
```

The server will run on `http://localhost:3000` by default.

## API Endpoints

### POST /api/contact
Submit a contact form message.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Inquiry",
  "message": "Your message here"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for contacting us! We will get back to you soon.",
  "contactId": 1234567890
}
```

### GET /api/contacts
Retrieve all contact submissions (admin endpoint).

**Response:**
```json
{
  "success": true,
  "contacts": [
    {
      "id": 1234567890,
      "name": "John Doe",
      "email": "john@example.com",
      "subject": "Inquiry",
      "message": "Your message here",
      "timestamp": "2025-01-01T00:00:00.000Z",
      "read": false
    }
  ]
}
```

### POST /api/newsletter
Subscribe to newsletter.

**Request Body:**
```json
{
  "email": "subscriber@example.com"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Successfully subscribed to newsletter!"
}
```

### GET /api/health
Check server health status.

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2025-01-01T00:00:00.000Z"
}
```

## Data Storage

Data is stored in JSON files in the `backend/data/` directory:
- `contacts.json` - Contact form submissions
- `subscribers.json` - Newsletter subscribers

## Security Notes

**Important:** This is a basic implementation for development purposes. For production use, you should:
1. Add authentication for admin endpoints
2. Implement rate limiting
3. Use a proper database instead of JSON files
4. Add HTTPS
5. Implement proper error logging
6. Add input sanitization
7. Use environment variables for sensitive data
