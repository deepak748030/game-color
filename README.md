# Real Money Color Prediction Game

Welcome to the Real Money Color Prediction Game! This application allows users to participate in a thrilling color prediction game where they can place bets and win real money based on their predictions.

## Features

- **Color Prediction**: Users can predict the outcome of color choices (e.g., red or black) and place bets accordingly.
- **Real Money Betting**: The game involves real money betting, providing users with the excitement of winning real cash.
- **User Authentication**: Secure user authentication system allows users to register, login, and manage their accounts.
- **Transaction History**: Users can track their transaction history, including deposits, withdrawals, and bet outcomes.
- **Admin Panel**: Administrators have access to an admin panel where they can manage user accounts, view betting statistics, and moderate the game.

## Installation

To run this application locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/real-money-color-prediction.git

2. Navigate to the project directory:
   cd real-money-color-prediction

3. Create a .env file in the root directory of the project with the following structure:
   MONGODB_URI=mongodb://localhost:27017/mydatabase
   JWT_SECRET=mysecretkey123

    Replace the values mongodb://localhost:27017/mydatabase with your MongoDB connection string and mysecretkey123 with your desired JWT secret key.
   
4. Install dependencies:
   npm install

5. Start the development server:   
   npm start

6. Open your browser and visit http://localhost:3000 to view the application.

# Environment Variables
  The .env file contains the following environment variables:

  MONGODB_URI: MongoDB connection string.
  JWT_SECRET: Secret key used for JWT token generation.


server/
  - controllers/
    - authController.js   # Controller for user authentication
    - gameController.js   # Controller for game-related operations
    - transactionController.js   # Controller for handling transactions (add money, deduct money, etc.)
  - models/
    - User.js   # MongoDB model for user data
    - Game.js   # MongoDB model for game data
    - Transaction.js   # MongoDB model for transaction data
  - routes/
    - authRoutes.js   # Routes for user authentication
    - gameRoutes.js   # Routes for game-related operations
    - transactionRoutes.js   # Routes for transaction operations
  - sockets/
    - gameSocket.js   # Socket.io event handlers for real-time game updates
    - transactionSocket.js   # Socket.io event handlers for real-time transaction updates
  - app.js   # Entry point for backend application
  - config.js   # Configuration file (e.g., database connection)
  - server.js   # File to start the server



Explanation of each folder:

controllers/: This folder contains controllers responsible for handling different aspects of the application's logic.

models/: This folder contains MongoDB models defining the structure of the data stored in the database.

routes/: This folder contains Express.js routes defining API endpoints for various operations (authentication, game management, transaction handling).

sockets/: This folder contains Socket.io event handlers for real-time communication between clients and the server.

app.js: This file is the entry point for the backend application where Express.js is initialized and middleware is set up.

config.js: This file contains configuration settings such as database connection details.

server.js: This file is responsible for starting the server.

This structure follows the MVC (Model-View-Controller) pattern, separating concerns and making the codebase more organized and maintainable. The gameSocket.js and transactionSocket.js files handle real-time updates for game events and transactions, respectively. The controllers handle authentication, game operations, and transaction management. Finally, the routes define the API endpoints for clients to interact with the server.





