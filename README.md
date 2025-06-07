# Full Stack Realtime Chat Application

A full-stack real-time chat application developed using the MERN stack and Socket.io. The application supports secure user authentication, real-time messaging, user presence tracking, and a responsive, modern UI design.


## Key Features

- Comprehensive tech stack: MongoDB, Express.js, React.js, Node.js
- Real-time bi-directional communication using Socket.io
- Secure authentication and authorization via JWT
- Online user status indicators
- Centralized state management with Zustand
- Modern and responsive UI using TailwindCSS and DaisyUI
- Robust error handling on both client and server
- Guide included for deployment on free hosting platforms

---

## Technology Stack

**Frontend**:
- React.js
- TailwindCSS
- DaisyUI
- Zustand
- Socket.io-client

**Backend**:
- Node.js
- Express.js
- MongoDB
- JWT
- Socket.io

**Media Management**:
- Cloudinary

**Development Environment**:
- Node.js with separate configurations for development and production

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/chat-app.git
cd chat-app
```

### 2. Configure Environment Variables

Create a `.env` file in the root directory and populate it with the following:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5001
JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

NODE_ENV=development
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Build the Application

```bash
npm run build
```

### 5. Start the Server

```bash
npm start
```

---

## Deployment

The application can be deployed using platforms such as:

- Render
- Vercel
- Railway
- Heroku

Refer to the YouTube tutorial for step-by-step deployment instructions.

---

## Contributing

Contributions are welcome. Please open an issue to discuss any major changes before submitting a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Author

**Divyashree Shetti**  
[GitHub](https://github.com/Divya-Shetti)  
[LinkedIn]([https://www.linkedin.com/in/divyashree-shetti-00b97826a/])
