# Meeting App

A modern web application for managing meetings, teams, and schedules. This app runs completely offline using dummy data stored in localStorage, making it perfect for development and testing purposes.

## 🚀 Features

- **User Authentication**: Register new users or login with existing accounts
- **Meeting Management**: Create, search, and filter meetings by various criteria
- **Team Collaboration**: Organize users into teams and manage team membership
- **Calendar Integration**: View meetings organized by date with chronological sorting
- **User Management**: Add/remove users from meetings and teams
- **Responsive Design**: Modern UI that works across different devices
- **Offline Functionality**: No external API dependencies - works completely offline

## 📦 Installation

### Prerequisites

- Node.js (v12 or higher)
- npm

### Setup

1. **Clone or download the project**
   ```bash
   cd "Meeting App"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run start
   ```

4. **Open your browser**
   - The app will automatically open at `http://127.0.0.1:8080`
   - If it doesn't open automatically, navigate to the URL manually

## 🎯 Usage

### Getting Started

1. **First Time Setup**: The app automatically initializes with dummy data when you first load it
2. **Login**: Use any of the pre-configured accounts or register a new one
3. **Navigate**: Use the navigation bar to access different features

### Pre-configured User Accounts

You can login with any of these accounts (password: `password123`):

| Name | Email | Role |
|------|-------|------|
| John Doe | john@example.com | Developer |
| Jane Smith | jane@example.com | Designer |
| Mike Johnson | mike@example.com | Marketing |
| Sarah Wilson | sarah@example.com | Manager |

### Core Features

#### 🔐 Authentication
- **Register**: Create new user accounts
- **Login**: Access your account with email/password
- **Session Management**: Stay logged in across browser sessions

#### 📅 Meeting Management
- **Create Meetings**: Add new meetings with title, description, date, time, and duration
- **Search Meetings**: Find meetings by title or description
- **Filter by Period**: View meetings for today, this week, this month, or all time
- **Member Management**: Add/remove participants from meetings

#### 👥 Team Management
- **View Teams**: Browse all available teams
- **Create Teams**: Form new teams with descriptions and initial members
- **Join/Leave Teams**: Manage your team memberships
- **Team Directory**: See all team members and their roles

#### 📆 Calendar View
- **Date Selection**: Pick any date to view scheduled meetings
- **Meeting Details**: See meeting times, titles, and participants
- **Chronological Order**: Meetings are sorted by time for easy viewing

## 🗂️ Project Structure

```
Meeting App/
├── public/
│   ├── index.html              # Main landing page
│   ├── login.html              # Login page
│   ├── register.html           # Registration page
│   ├── add-meetings.html       # Create meeting page
│   ├── search-meetings.html    # Search meetings page
│   ├── teams.html              # Teams management page
│   ├── css/                    # Stylesheets
│   │   ├── index.css
│   │   ├── authentication.css
│   │   ├── meetings.css
│   │   ├── teams.css
│   │   ├── calender.css
│   │   └── nav.css
│   ├── js/
│   │   ├── config.js           # App configuration
│   │   ├── navbar.js           # Navigation functionality
│   │   ├── services/           # Data services
│   │   │   ├── auth.js         # Authentication service
│   │   │   ├── Meetings.js     # Meeting management
│   │   │   ├── teams.js        # Team management
│   │   │   ├── calender.js     # Calendar functionality
│   │   │   ├── manageUsers.js  # User management
│   │   │   └── check-auth.js   # Authentication check
│   │   └── pages/              # Page-specific scripts
│   │       ├── login.js
│   │       ├── register.js
│   │       ├── addMeetings.js
│   │       ├── searchMeetings.js
│   │       ├── teams.js
│   │       └── calender.js
│   └── external/               # External libraries (FontAwesome)
├── package.json
├── package-lock.json
└── README.md
```

## 💾 Data Storage

The app uses browser localStorage to persist data. Here's what gets stored:

### User Data
```javascript
{
  _id: "user1",
  name: "John Doe",
  email: "john@example.com",
  password: "password123"
}
```

### Meeting Data
```javascript
{
  _id: "meeting1",
  title: "Weekly Team Standup",
  description: "Weekly progress review and planning",
  date: "2024-01-15",
  time: "09:00",
  duration: "60",
  members: ["user1", "user2", "user3"],
  createdBy: "user1",
  createdAt: "2024-01-10T10:00:00Z"
}
```

### Team Data
```javascript
{
  _id: "team1",
  name: "Development Team",
  description: "Frontend and backend developers",
  members: ["user1", "user2", "user3"],
  createdBy: "user1",
  createdAt: "2024-01-08T14:30:00Z"
}
```

## 🔧 Development

### Architecture

- **Frontend**: Vanilla JavaScript with ES6 modules
- **Styling**: CSS3 with modern flexbox/grid layouts
- **Icons**: FontAwesome for consistent iconography
- **Data**: localStorage for offline data persistence
- **Server**: live-server for development hot-reloading

### Key Services

- **auth.js**: Handles user registration, login, and session management
- **Meetings.js**: Manages meeting CRUD operations and filtering
- **teams.js**: Handles team creation and membership management
- **calender.js**: Provides date-based meeting filtering
- **manageUsers.js**: Manages user relationships with meetings/teams

### Adding New Features

1. **Create service functions** in the appropriate service file
2. **Add UI components** in the relevant HTML page
3. **Connect functionality** in the corresponding page script
4. **Update dummy data** if needed for testing

## 🎨 Customization

### Styling
- Modify CSS files in the `public/css/` directory
- Each page has its dedicated stylesheet
- `normalize.css` provides cross-browser consistency

### Dummy Data
- Edit the initialization functions in service files
- Add more users, meetings, or teams as needed
- Modify data structures to match your requirements

### Configuration
- Update `config.js` to change localStorage keys
- Modify delay timings for API simulation
- Add new configuration options as needed

## 🐛 Troubleshooting

### Common Issues

1. **App won't start**: Ensure Node.js and npm are installed correctly
2. **Pages not loading**: Check that live-server is running on port 8080
3. **Data not persisting**: Verify localStorage is enabled in your browser
4. **Login issues**: Use the pre-configured accounts or register a new one

### Clearing Data

To reset the app and clear all data:
```javascript
// Run in browser console
localStorage.clear();
location.reload();
```

## 📱 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 🤝 Contributing

1. Fork the project
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is available for educational and development purposes.

## 🆘 Support

For questions or issues:
1. Check the troubleshooting section
2. Review the browser console for errors
3. Verify localStorage is working in your browser
4. Ensure all dependencies are installed correctly

---

**Happy Meeting Management! 🎉** 