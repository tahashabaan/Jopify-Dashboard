# Jopify Dashboard

![Alt text](n)
![alt text](clients/public/vite.svg)
![Vector](images/vite.svg)


Jopify Dashboard is a web application designed to provide users with insights and analytics related to their job search activities. It offers a centralized dashboard to track job application progress, view statistics, and visualize job search data.

## Technologies Used

- **Express.js**: A minimalist web application framework for Node.js, providing a robust set of features for building web applications and APIs.
- **JavaScript (Node.js)**: A versatile programming language used for building the backend logic of the application.
- **React**: A popular JavaScript library for building user interfaces, enabling the creation of dynamic and responsive front-end components.
- **MongoDB**: A NoSQL database program that utilizes JSON-like documents with optional schemas, providing scalability and flexibility for data storage.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB installed and running locally or accessible remotely.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/tahashabaan/jopify-dashboard.git
    ```

2. Navigate into the project directory:

    ```bash
    cd jopify-dashboard
    ```

3. Install backend dependencies:

    ```bash
    cd backend
    npm install
    ```

4. Install frontend dependencies:

    ```bash
    cd ../frontend
    npm install
    ```

### Configuration

1. Set up environment variables:

    - Create a `.env` file in the `backend` directory.
    - Define the following variables:

        ```env
        PORT=3000
        MONGODB_URI=mongodb://localhost:27017/jopify_dashboard
        ```

    Replace `mongodb://localhost:27017/jopify_dashboard` with the connection string for your MongoDB database.

### Running the Application

1. Start the backend server:

    ```bash
    cd backend
    npm start
    ```

2. Start the frontend development server:

    ```bash
    cd frontend
    npm start
    ```

3. Access the dashboard in your browser at `http://localhost:3000`.

## Features

- **Dashboard Overview**: Provides a summary of job search activities, including total applications, interviews scheduled, and job offers received.
- **Application Analytics**: Visualizes job application data through charts and graphs, allowing users to analyze trends and patterns in their job search efforts.
- **Customizable Filters**: Allows users to filter data based on various criteria such as time period, job category, and application status.
- **User Authentication**: Secure user authentication system to protect user data and provide personalized experiences.
- **Responsive Design**: The dashboard is designed to be responsive, ensuring a seamless experience across different devices and screen sizes.



