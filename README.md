# MERN Stack Blog Application

A full-featured blog platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This application enables users to explore and publish blogs, with a range of features designed for an engaging user experience.

## Features

### User Features
- **Browse Blogs Without Login**: Users can view blogs without needing to sign up or log in.
- **User Authentication**: Users can sign up using their email or Google account. Google integration offers a faster, more seamless login experience.
- **Blog Creation**: Once signed up, users can create and publish their own blogs with:
  - Blog banner images
  - Titles and subtitles
  - Rich text formatting (headings, lists, quotes)
  - Inline image uploads
  - Paragraph reordering
  - Tags for easier search and categorization
- **Dark Mode & Light Mode**: Toggle between dark and light mode for better accessibility and user customization.
- **User Engagement**: Users can leave comments, react to posts with a "love" emoticon, and track the number of reactions received on their own blogs.
- **Notifications**: Authors are notified of comments and reactions on their blogs.
- **Profile Management**: Users can update their profile picture, username, password, bio, and social media links. Password updates are also supported.

### Admin Features
- **Blog Management**: Admins can moderate and manage blogs, including removing inappropriate content if needed.

### Search Functionality
- **Search**: Users can search for blogs by specific words or tags, ensuring they find content that interests them.

## Tech Stack
- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: Google OAuth2.0, JWT
- **UI/UX Enhancements**: Dark/Light mode, notifications, real-time updates

## Setup and Installation

### Prerequisites
- Node.js and npm installed
- MongoDB instance running locally or on a cloud provider (e.g., MongoDB Atlas)

### Installation

1. Install client-side dependencies:
    ```bash
    git clone https://github.com/Nur-Adnan/MERN-Stack-Blog-App-Frontend.git
    npm install
    ```

3. Install server-side dependencies:
    ```bash
    git clone https://github.com/Nur-Adnan/MERN-Stack-Blog-App-Backend.git
    npm install
    ```

4. Create a `.env` file in the `server` folder with the following variables:
    ```bash
    DB_LOCATION=your-mongodb-connection-string
    SECRET_ACCESS_KEY=your-secret-access-key
    CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
    CLOUDINARY_API_KEY=your-cloudinary-api-key
    CLOUDINARY_API_SECRET=your-cloudinary-api-secret
    ```

5. Create a `.env` file in the `client` folder with the following variables:
    ```bash
    VITE_SERVER_DOMAIN=your-server-domain-url
    VITE_FIREBASE_KEY=your-firebase-api-key
    VITE_AUTH_DOMAIN=your-auth-domain
    VITE_PROJECT_ID=your-project-id
    VITE_STORAGE_BUCKET=your-storage-bucket
    VITE_MESSAGING_SENDER_ID=your-messaging-sender-id
    VITE_APP_ID=your-app-id
    ```

6. Start the development servers:
    - For the backend:
      ```bash
      npm run dev
      ```

    - For the frontend:
      ```bash
      npm start
      ```

7. The application will be accessible at `http://localhost:3000`.

## Screenshots


## License
This project is licensed under the MIT License.
