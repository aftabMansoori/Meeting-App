# Meeting App Vue

A Vue.js-based meeting management application that allows users to schedule meetings, manage teams, and view calendar events. This application has been converted from using external API calls to using dummy data for offline development and demonstration purposes.

## 🚀 Features

- **User Authentication**: Login and registration with dummy user accounts
- **Meeting Management**: Create, search, and manage meetings
- **Team Management**: Create teams and manage team members
- **Calendar View**: View meetings in a calendar interface
- **User Management**: View and manage registered users
- **Responsive Design**: Modern UI optimized for all devices

## 🔧 Setup and Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation Steps

1. Clone the repository:
```bash
git clone <your-repo-url>
cd meeting-app-vue
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run serve
```

4. Open your browser and navigate to `http://localhost:8080`

## 🎯 Dummy Data Implementation

This application has been converted from using Heroku API calls to using dummy data for:

- **Authentication**: Pre-configured user accounts
- **Meetings**: Sample meeting data with various statuses
- **Teams**: Example teams with members
- **Calendar**: Scheduled events and meetings
- **Users**: Registered user profiles

### Test Credentials

Use these dummy accounts to test the application:

| Email | Password | Role | Description |
|-------|----------|------|-------------|
| `admin@meeting.com` | `Admin@123` | Administrator | Full access to all features |
| `user@meeting.com` | `user123` | Regular User | Standard user permissions |
| `demo@meeting.com` | `demo123` | Demo User | Demo account for testing |

## 📁 Project Structure

```
meeting-app-vue/
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── components/          # Reusable Vue components
│   │   ├── AddMeeting.vue
│   │   ├── AddTeamCard.vue
│   │   ├── AppFooter.vue
│   │   ├── CalenderHours.vue
│   │   ├── MeetingResults.vue
│   │   ├── Navbar.vue
│   │   ├── SearchMeeting.vue
│   │   ├── TeamCard.vue
│   │   ├── mixins/
│   │   │   └── ThemeMixin.js
│   │   └── utils/
│   │       ├── AppAlert.vue
│   │       ├── AppLoader.vue
│   │       ├── AppSpinner.vue
│   │       └── index.js
│   ├── pages/               # Main application pages
│   │   ├── 404.vue
│   │   ├── Calender.vue
│   │   ├── Login.vue
│   │   ├── Meeting.vue
│   │   ├── Register.vue
│   │   └── Teams.vue
│   ├── services/            # API service layer (now with dummy data)
│   │   ├── auth.js          # Authentication service
│   │   ├── axiosConfig.js   # HTTP client configuration
│   │   ├── calender.js      # Calendar data service
│   │   ├── helper.js        # Helper functions
│   │   ├── manageUsers.js   # User management service
│   │   ├── meetings.js      # Meeting management service
│   │   └── teams.js         # Team management service
│   ├── store/               # Vuex state management
│   │   ├── index.js
│   │   └── modules/
│   │       ├── auth.js      # Authentication state
│   │       └── manageUsers.js
│   ├── router/              # Vue Router configuration
│   │   └── index.js
│   ├── filter/              # Custom filters
│   │   └── date.js
│   ├── App.vue              # Root component
│   ├── config.js            # Application configuration
│   ├── init.js              # Initialization logic
│   ├── main.js              # Application entry point
│   └── plugins.js           # Vue plugins
├── babel.config.js
├── jsconfig.json
├── package.json
├── vue.config.js
└── README.md
```

## 🔄 Changes Made

### API to Dummy Data Conversion

1. **Configuration (`src/config.js`)**:
   - Removed Heroku base URL
   - Kept authentication keys for localStorage

2. **Authentication (`src/services/auth.js`)**:
   - Replaced API calls with dummy user validation
   - Added pre-configured test accounts
   - Simulated API delays for realistic UX

3. **Teams (`src/services/teams.js`)**:
   - Created sample teams with members
   - Implemented in-memory team creation
   - Added realistic team data structure

4. **Meetings (`src/services/meetings.js`)**:
   - Generated comprehensive meeting data
   - Implemented filtering by period and search terms
   - Added meeting creation with persistent state

5. **Calendar (`src/services/calender.js`)**:
   - Created calendar-specific meeting data
   - Implemented hourly meeting organization
   - Added date-based filtering

6. **User Management (`src/services/manageUsers.js`)**:
   - Added comprehensive user profiles
   - Implemented user role management
   - Created team membership simulation

7. **Helper Functions (`src/services/helper.js`)**:
   - Updated error handling for dummy data
   - Enhanced response processing

## 🌟 Available Scripts

```bash
# Start development server
npm run serve

# Build for production
npm run build

# Run linter
npm run lint

# Run tests (if configured)
npm run test
```

## 📊 Dummy Data Overview

### Teams
- **Development Team**: Frontend and Backend Developers
- **Design Team**: UI/UX Designers and Creative Team  
- **Marketing Team**: Digital Marketing and Content Strategy

### Users
- 10 pre-configured users across different departments
- Includes developers, designers, marketers, and administrators

### Meetings
- Various meeting types: standups, reviews, planning, workshops
- Different time slots and locations
- Past, present, and future meetings for testing

### Calendar Events
- Daily recurring meetings
- Special events and workshops
- Team lunches and social events

## 🛠️ Technology Stack

- **Frontend**: Vue.js 2.x
- **State Management**: Vuex
- **Routing**: Vue Router
- **Styling**: CSS3 with responsive design
- **Build Tool**: Vue CLI
- **Development**: Hot reload, ESLint

## 📝 Usage Guide

1. **Login**: Use any of the provided test credentials
2. **Dashboard**: View your meetings and teams overview
3. **Calendar**: Browse meetings by date with hourly view
4. **Meetings**: Search, filter, and create new meetings
5. **Teams**: Create teams and manage memberships
6. **Profile**: Manage your user profile and settings

## 🔮 Future Enhancements

- Real-time meeting notifications
- Meeting room booking integration  
- Video conferencing integration
- Mobile application
- Advanced calendar features
- Meeting analytics and reporting

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support and questions, please open an issue in the repository or contact the development team.

---

**Note**: This application currently uses dummy data for demonstration purposes. To connect to a real backend, update the service files in `src/services/` to make actual API calls to your backend endpoints.
