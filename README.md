# Cognifyz Task 4 - Full Stack Application

A modern full-stack web application built with React.js frontend and Node.js/Express backend, developed as part of Cognifyz Technologies internship program.

## 📁 Project Structure

```
Cognifyz-task-4/
├── client/                 # React.js Frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # Reusable React components
│   │   ├── services/       # API service layer
│   │   ├── App.js          # Main application component
│   │   └── index.js        # Application entry point
│   ├── package.json
│   └── README.md
├── server/                 # Node.js/Express Backend
│   ├── controllers/        # Business logic controllers
│   │   └── userController.js
│   ├── models/            # Data models
│   ├── routes/            # API route definitions
│   │   └── userRoutes.js
│   ├── server.js          # Server entry point
│   └── package.json
├── .gitignore             # Git ignore configuration
└── README.md              # Project documentation
```

## 🛠️ Tech Stack

### Frontend
- **React.js 19.1.1** - Modern JavaScript library for building user interfaces
- **React DOM** - React package for working with the DOM
- **React Scripts** - Configuration and scripts for React development
- **Testing Library** - Simple and complete testing utilities

### Backend
- **Node.js** - JavaScript runtime for server-side development
- **Express.js 4.18.2** - Fast, unopinionated web framework for Node.js
- **Body-Parser** - Node.js body parsing middleware
- **CORS** - Cross-Origin Resource Sharing middleware

## ✨ Features

- **Full Stack Architecture** - Separated frontend and backend for scalability
- **RESTful API** - Clean API structure with proper routing
- **Modern React** - Component-based frontend with hooks and modern practices
- **CORS Enabled** - Cross-origin requests support for frontend-backend communication
- **Modular Structure** - Organized codebase with separation of concerns

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Cognifyz-task-4
   ```

2. **Install Backend Dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../client
   npm install
   ```

### Running the Application

#### Start Backend Server
```bash
cd server
npm start
```
The server will run on `http://localhost:5000`

#### Start Frontend Development Server
```bash
cd client
npm start
```
The client will run on `http://localhost:3000`

### Available Scripts

#### Backend (server/)
- `npm start` - Start the production server
- `npm run dev` - Start development server with hot reload (if nodemon is configured)

#### Frontend (client/)
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run test suite
- `npm run eject` - Eject from Create React App (one-way operation)

## 📡 API Endpoints

### User Routes
Base URL: `http://localhost:5000/api/users`

- `GET /` - Get all users
- `POST /` - Create new user
- `GET /:id` - Get user by ID
- `PUT /:id` - Update user by ID
- `DELETE /:id` - Delete user by ID

## 🗂️ Project Components

### Backend Structure
- **server.js** - Main server configuration and startup
- **controllers/** - Business logic for handling requests
- **routes/** - API route definitions and middleware
- **models/** - Data models and database schemas

### Frontend Structure
- **components/** - Reusable React components
- **services/** - API communication layer
- **App.js** - Main application component and routing
- **index.js** - Application entry point and React DOM rendering

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the server directory for environment-specific variables:
```env
PORT=5000
NODE_ENV=development
```

### CORS Configuration
The backend is configured to accept requests from all origins. For production, configure specific allowed origins in `server.js`.

## 🧪 Testing

### Frontend Testing
```bash
cd client
npm test
```
Uses React Testing Library for component testing.

### Backend Testing
Testing framework to be implemented (Jest/Mocha recommended).

## 📦 Build & Deployment

### Frontend Build
```bash
cd client
npm run build
```
Creates optimized production build in `client/build/` directory.

### Backend Deployment
The backend is ready for deployment to platforms like:
- Heroku
- Vercel
- Railway
- DigitalOcean

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Development Guidelines

- Follow ES6+ syntax and modern JavaScript practices
- Use meaningful component and variable names
- Implement proper error handling
- Add comments for complex logic
- Follow RESTful API conventions
- Write tests for new features

## 🐛 Known Issues

- Environment configuration needs to be finalized
- Database integration pending
- Authentication system to be implemented
- Error handling middleware to be enhanced

## 🎯 Future Enhancements

- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] User authentication and authorization
- [ ] Input validation and sanitization
- [ ] Comprehensive error handling
- [ ] API documentation with Swagger
- [ ] Unit and integration tests
- [ ] Production deployment configuration
- [ ] Performance optimization
- [ ] Security enhancements

## 📄 License

This project is part of Cognifyz Technologies internship program.

## 👥 Author

**Internship Project - Cognifyz Technologies**
- Task 4: Full Stack Web Application Development

---

For questions or support, please contact the development team or refer to the project documentation.