# Anniversary

## Overview

This project is a personal photo album developed as a Valentine's gift for my girlfriend. The essence of the application is to allow us to upload pictures every day, with a unique feature that only on our dating anniversary or Valentine's Day can we view the images. It serves as a digital time capsule, capturing moments throughout the year and revealing them on special occasions.

## Features

- **Daily Photo Uploads:** Users can upload photos every day to the album.
- **Special Day Viewing:** Photos can only be viewed on the couple's dating anniversary and Valentine's Day, making these days even more special.
- **Secure Authentication:** The backend includes an authentication system to ensure that only authorized users can upload and view photos, keeping our memories private and secure.
- **Go Backend:** The server-side logic is implemented in Go, offering robust performance and security for handling photo storage and authentication.

## Technologies

- **Frontend:** React.js
  - Custom hooks for managing state and special date logic
  - Components for photo uploads, gallery display, and modal views
  - Styling with a dedicated `CountdownTimerStyles` for a cohesive look
- **Backend:** Go (Golang)
  - RESTful API for handling photo uploads and retrievals
  - Secure authentication system to protect access

## Setup and Installation

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- Git
- Go (for the backend)
- Node.js and npm (for the frontend)

### Backend Setup (AnniversaryAPI)

1. **Clone the Backend Repository:**
   ```bash
   git clone https://github.com/VicSobDev/AnniversaryAPI
   ```

2. **Navigate to the Project Directory:**
   ```bash
   cd AnniversaryAPI
   ```

3. **Run the Backend:**
   ```bash
   make run
   ```
   This command starts the backend server.

### Frontend Setup

1. **Clone the Frontend Repository:**
   ```bash
   git clone https://github.com/VicSobDev/Anniversary
   ```

2. **Navigate to the Frontend Project Directory:**
   ```bash
   cd Anniversary
   ```

3. **Install Dependencies:**
   ```bash
   npm install
   ```

4. **Start the Frontend Development Server:**
   ```bash
   npm run start
   ```
   The frontend application will be available at [http://localhost:3000](http://localhost:3000).

### Connecting Frontend with Backend

Ensure that the frontend application is configured to communicate with the backend API. This typically involves setting the backend API's URL as an environment variable or directly in your React application's API service configurations.

## Note to Contributors

I'm usually a backend developer, but I tried doing frontend work to make this project special. If you have any ideas on how to make the frontend better, I'd love to hear them!