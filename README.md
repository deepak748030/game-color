# Real Money Color Prediction Game

Welcome to the Real Money Color Prediction Game! This application allows users to participate in a thrilling color prediction game where they can place bets and win real money based on their predictions.

## Features

- **Color Prediction**: Users can predict the outcome of color choices (e.g., red or black) and place bets accordingly.
- **Real Money Betting**: The game involves real money betting, providing users with the excitement of winning real cash.
- **User Authentication**: Secure user authentication system allows users to register, login, and manage their accounts.
- **Transaction History**: Users can track their transaction history, including deposits, withdrawals, and bet outcomes.
- **Admin Panel**: Administrators have access to an admin panel where they can manage user accounts, view betting statistics, and moderate the game.

   ```bash ## Installation

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

