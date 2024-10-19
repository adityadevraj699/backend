# Blogging Application - Backend

This repository contains the backend code for the **Blogging Application**, built with **Node.js**, **Express**, and **MongoDB**. The backend is responsible for managing blog posts, user authentication, and other core functionalities of the application. The backend is structured to be scalable and efficient, allowing users to create, update, delete, and view blog posts.

For the frontend source code, check the repository [here](https://github.com/adityadevraj699/frontend).  
Live preview: [Blogging Application](http://15.206.84.178:3000/)

## Features
- **User Authentication**: Secure login and registration system with JWT (JSON Web Token).
- **CRUD Functionality**: Create, read, update, and delete blog posts.
- **Comments System**: Users can comment on blog posts.
- **Categories and Tags**: Categorize posts and add tags for better organization.
- **User Roles**: Admin and regular user roles for managing content.

## Tech Stack
- **Node.js**: Backend runtime environment.
- **Express.js**: Web application framework for handling routes and middleware.
- **MongoDB**: NoSQL database for storing blog data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB.

## Prerequisites
- **Node.js** (v12 or above)
- **MongoDB** installed and running locally or on a cloud service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
- **npm** (Node Package Manager)

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/blogging-backend.git
cd blogging-backend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a `.env` file in the root directory and add the following:
```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 4. Connect MongoDB Database
You can either:
- **Run MongoDB locally**: Ensure MongoDB is installed and running on your machine.
- **Use MongoDB Atlas**: Set up a cloud MongoDB cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

To connect to MongoDB, you'll need to add your **MongoDB URI** in the `.env` file:
```bash
MONGO_URI=mongodb://localhost:27017/bloggingapp
```
Or, if using **MongoDB Atlas**:
```bash
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/bloggingapp?retryWrites=true&w=majority
```

### 5. Run the application
Start the backend server:
```bash
npm run dev
```
The server will start on `http://localhost:5000/` (or any port defined in your `.env` file).

### 6. API Endpoints
Some of the core API endpoints include:
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - User login
- `GET /api/posts` - Get all blog posts
- `POST /api/posts` - Create a new blog post (requires authentication)
- `PUT /api/posts/:id` - Update an existing post (requires authentication)
- `DELETE /api/posts/:id` - Delete a blog post (requires authentication)

### 7. Build and Deploy
To deploy the application:
- Ensure the `MONGO_URI` and `JWT_SECRET` are set properly for the production environment.
- Use a platform like **Heroku**, **AWS**, or **Vercel** to host your Node.js application.

---

By following these steps, users can easily set up and connect the blogging application backend to a MongoDB database, allowing them to start managing blog content right away.
