# Coffee Shop Finder App - Frontend

## Overview

This project is the frontend part of a Coffee Shop Finder App built using React.js. It interacts with a backend built on Node.js and MongoDB to fetch and display coffee shop data, allowing users to explore various coffee shops and their products.

## Assignment Overview

The assignment is to develop a Coffee Shop Finder App that enables users to search for and explore coffee shops, view their products, and get detailed information about each shop. The app will include a robust backend built with Node.js, a dynamic frontend using React.js, data storage managed by MongoDB, and deployment on AWS.

## Requirements

- Proficient in React.js, Node.js, MongoDB, and AWS.
- Experience in designing and consuming RESTful APIs.
- Familiarity with third-party integrations and secure API connections.
- Understanding of UI/UX design principles and responsive design.

## Project Structure

The frontend is structured to provide a user-friendly interface for interacting with the Coffee Shop Finder App. Key components include:

- **index.html**: Entry point HTML file for the React application.
- **src/main.jsx**: JavaScript entry point for rendering the React application.
- **src/App.jsx**: Main component for structuring the application layout.
- **src/services/api.jsx**: Service file for making API requests to the backend.
- **src/pages/Home.jsx**: Home page component to display coffee shop data.
- **src/components**: Directory containing reusable UI components like `CoffeeShop.jsx` and `SearchBar.jsx`.
- **App.css**: Global styles to ensure consistency across the application.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-frontend-repo.git
Navigate to the project directory:
bash
Copy code
cd your-frontend-repo
Install dependencies:
bash
Copy code
npm install
Development
To run the frontend application in development mode:

bash
Copy code
npm run dev
This will start the application on http://localhost:5173.

Deployment
To deploy this frontend application:

Build the application for production:

bash
Copy code
npm run build
Push the code to your GitHub repository.

Set up GitHub Actions to build and push the Docker image to DockerHub.

Configure a self-hosted runner on AWS to pull and run the Docker image:

Configure an EC2 instance.
Install Docker and GitHub Actions runner.
Pull the Docker image from DockerHub and run the container.
Access URLs
Backend API: http://44.202.166.106:5000/api
Frontend Application: http://44.202.166.106:5173
Bonus (Advanced Search Capabilities)
Implement advanced search filters and sorting options to allow users to refine their search based on criteria such as distance, rating, or menu items. Utilize Elasticsearch or a similar technology to enhance search functionality.

Resources
Figma UI Design: Coffee Shop App

Contact
For any questions or feedback, please contact:
[Akshit Mittal](mailto:akshitmittal20@gmail.com)
