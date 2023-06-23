# Todo List Fullstack App

This is a full-stack Todo List application built using the MERN (MongoDB, Express, React, Node.js) stack. It allows users to create, manage, and track their tasks.

## Features

- Create new tasks with a title and completion status
- Mark tasks as completed or incomplete
- Delete tasks
- User-friendly interface with immediate feedback

## Technologies Used

- Vite: Fast and lightweight build tool for the frontend
- React: JavaScript library for building user interfaces
- Node.js: JavaScript runtime for the backend
- Express: Fast and minimalist web application framework for Node.js
- MongoDB: NoSQL database for storing tasks
- React Query: Data fetching and caching library for React
  
## Prerequisites

- Node.js installed
- MongoDB instance or connection URL

## Getting Started

**Frontend**

1. Clone the repository:
   git clone https://github.com/oric432/ToDoListProject.git
2. Navigate to the project directory:
  cd ToDoListProject/frontend
3. Install dependencies:
   npm install
4. Start the development server:
   npm run dev

The application will be accessible at `http://localhost:5173`.

**Backend**

1. Navigate to the project directory:
   cd ToDoListProject/backend
2. Navigate to the project directory:
  cd ToDoListProject/frontend
3. Configure the database connection:-
   - Open `backend/config/config.env`.
   - Replace the `MONGO_URI` value with your MongoDB connection URL.
4. Start the backend server:
   npm start

The backend server will be running at `http://localhost:3000`.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvement, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
