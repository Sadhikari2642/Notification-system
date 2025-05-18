# RabbitMQ and Node.js Notification System Setup

## Install RabbitMQ
1. Download and install RabbitMQ on your system.
   - [RabbitMQ Downloads](https://www.rabbitmq.com/download.html)
2. Ensure the RabbitMQ service is running.

## Install Node.js
1. Download and install Node.js.
   - [Node.js Downloads](https://nodejs.org/)
2. Verify the installation by running:
   ```bash
   node -v
   npm -v
   ```

## Project Setup
1. Create a folder for your project (e.g., `notification_system`).
2. Place all necessary files in the folder as per the project structure.
3. Navigate to the project directory:
   ```bash
   cd notification_system
   ```

## Install Dependencies
1. Install the required npm packages by running:
   ```bash
   npm install
   ```

## Run RabbitMQ
1. Ensure the RabbitMQ server is running on localhost.

## Start the API Server
1. Start the API server using the following command:
   ```bash
   npm start
   ```

## Start the Worker
1. Open a separate terminal.
2. Run the worker script:
   ```bash
   npm run worker
   ```

## Test API Endpoints
1. Use Postman, cURL, or any HTTP client to test the following API endpoints:

### Send Notification
- **Endpoint:** `POST /notifications`
- **Example Payload:**
  ```json
  {
    "userId": 1,
    "type": "email",
    "message": "This is a test notification."
  }
  ```

### Get Notifications for a User
- **Endpoint:** `GET /users/{id}/notifications`
