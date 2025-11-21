# SeamX - Textile Engineering Portfolio Website

![SeamX Logo](images/STUD-logo.jpg)

A modern, responsive portfolio website for the SeamX team - five undergraduate engineers from the Department of Textile & Apparel Engineering at the University of Moratuwa.

## 🌟 Features

### 🎨 Design & UI
- **Modern, Clean Interface** - Professional design with Tailwind CSS
- **Dark/Light Mode** - Seamless theme switching with persistent preferences
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **Smooth Animations** - Enhanced user experience with CSS animations and transitions
- **Interactive Elements** - Hover effects, card tilts, and scroll animations

### 🚀 Pages
1. **Homepage** - Hero section with team introduction and statistics
2. **About** - Comprehensive team story, mission, values, and activities
3. **Team Members** - Individual profiles of all 5 team members
4. **Projects** - Showcase of group projects including STUD Designs
5. **Portfolios** - Detailed individual portfolios for each member
6. **Gallery** - Photo gallery with achievements and team moments
7. **Services** - Comprehensive list of services and expertise areas
8. **Contact** - Contact information and inquiry form

### 💻 Technical Features
- **Enhanced Interactivity**
  - Scroll-to-top button
  - Smooth scroll behavior
  - Parallax effects
  - 3D card tilt on hover
  - Image lazy loading
  - Keyboard shortcuts (T for top, B for bottom)

- **Backend API** (Node.js/Express)
  - Contact form submission
  - Newsletter subscription
  - Form validation
  - Data persistence with JSON files
  - RESTful API endpoints

- **Accessibility**
  - ARIA labels and roles
  - Skip navigation links
  - Keyboard navigation support
  - Focus indicators
  - Semantic HTML structure

## 👥 Team Members

1. **Dimalka Hettiarachchi** (241083D) - IT Specialist
2. **Tuan Pallie** (241051E) - Business Analyzer
3. **Udula Bimsara** (241041A) - Planner
4. **Sulan Gunawardena** (241085K) - Data Analyzer
5. **Dinusha Dias** (241XXX) - Quality Specialist

## 🛠️ Technology Stack

### Frontend
- HTML5
- CSS3 (with custom properties for theming)
- JavaScript (ES6+)
- [Tailwind CSS](https://tailwindcss.com/) (via CDN)

### Backend
- Node.js
- Express.js
- CORS
- Body Parser

### Assets & Resources
- Custom CSS animations
- Theme management system
- Interactive JavaScript modules
- Responsive image handling

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- A modern web browser

### Frontend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/DimalkaS4/SeamX.git
   cd SeamX
   ```

2. **Open the website**
   
   Simply open any HTML file in your browser:
   ```bash
   # Option 1: Direct file opening
   open index.html
   
   # Option 2: Using a simple HTTP server
   python3 -m http.server 8000
   # Then visit http://localhost:8000
   
   # Option 3: Using Node.js http-server
   npx http-server -p 8000
   ```

### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   # Development mode (with auto-reload)
   npm run dev
   
   # Production mode
   npm start
   ```

4. **Backend runs on**
   ```
   http://localhost:3000
   ```

### API Endpoints

- `POST /api/contact` - Submit contact form
- `GET /api/contacts` - Retrieve all contacts (admin)
- `POST /api/newsletter` - Subscribe to newsletter
- `GET /api/health` - Health check

See [backend/README.md](backend/README.md) for detailed API documentation.

## 🎨 Customization

### Theme Colors

Edit CSS custom properties in each HTML file's `<style>` section or in `assets/theme.css`:

```css
:root {
    --color-primary-blue: #1e40af;
    --color-secondary-gray: #374151;
    --color-background-light: #F9FAFB;
    --color-accent-orange: #f59e0b;
    --color-dark-bg: #111827;
}
```

### Adding New Members

1. Add member photo to `images/` directory
2. Update `members.html` with new member card
3. Add portfolio section in `portfolios.html`
4. Update homepage statistics in `index.html`

### Navigation

Update navigation links in `includes/header.html` for consistent navigation across all pages.

## 📱 Mobile Optimization

The website is fully responsive with:
- Mobile-first design approach
- Hamburger menu for mobile navigation
- Touch-optimized interactions
- Responsive images and layouts
- Optimized typography for all screen sizes

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔒 Security Notes

⚠️ **Important:** The backend is a basic implementation for demonstration purposes. For production deployment:

1. Add authentication for admin endpoints
2. Implement rate limiting
3. Use a proper database (MongoDB, PostgreSQL, etc.)
4. Add HTTPS/SSL
5. Implement proper error logging and monitoring
6. Sanitize and validate all inputs
7. Use environment variables for sensitive configuration
8. Add CSRF protection

## 📄 File Structure

```
SeamX/
├── index.html              # Homepage
├── about.html              # About page
├── members.html            # Team members
├── projects.html           # Group projects
├── portfolios.html         # Individual portfolios
├── gallery.html            # Photo gallery
├── services.html           # Services offered
├── contact.html            # Contact page
├── assets/
│   ├── theme.css          # Theme and styling
│   ├── theme.js           # Theme toggle logic
│   └── interactions.js    # Enhanced interactions
├── backend/
│   ├── server.js          # Express server
│   ├── package.json       # Dependencies
│   ├── README.md          # Backend docs
│   └── data/              # JSON data storage (gitignored)
├── images/                 # Images and assets
├── includes/
│   └── header.html        # Shared header component
└── .gitignore             # Git ignore rules
```

## 🚀 Deployment

### GitHub Pages (Frontend Only)

1. Push to GitHub
2. Go to repository Settings > Pages
3. Select branch and root folder
4. Save and wait for deployment

### Heroku (Full Stack)

```bash
# Login to Heroku
heroku login

# Create app
heroku create seamx-app

# Deploy
git push heroku main
```

### Netlify (Frontend Only)

1. Connect GitHub repository
2. Set build command: (none needed)
3. Set publish directory: `/`
4. Deploy

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is created by the SeamX team for educational and portfolio purposes.

## 📞 Contact

- **Team Email**: uom.ta.group@example.com
- **Location**: University of Moratuwa, Sri Lanka
- **Department**: Textile & Apparel Engineering

## 🙏 Acknowledgments

- University of Moratuwa
- Department of Textile & Apparel Engineering
- All team members and contributors
- Tailwind CSS for the styling framework

---

**Created with ❤️ by the SeamX Team**

*Engineerin Tomorrow's Textiles*
