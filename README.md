Install RabbitMQ
Download and install RabbitMQ on your system. Ensure the RabbitMQ service is running.
RabbitMQ Downloads

Install Node.js
Ensure you have Node.js installed.
Node.js Downloads

Project Setup

Create a folder (e.g., notification_system) and place all the files in the structure provided above.

Navigate to the project directory:

bash
Copy
Edit
cd notification_system
Install Dependencies
Run the following command to install the required npm packages:

bash
Copy
Edit
npm install
Run RabbitMQ
Ensure the RabbitMQ server is running on localhost.

Start the API Server
Start the API server using the following command:

bash
Copy
Edit
npm start
Start the Worker
In a separate terminal, run the worker script:

bash
Copy
Edit
npm run worker
Test API Endpoints
Use Postman, cURL, or any HTTP client to test the following API endpoints:

Send Notification (POST /notifications)
Example Payload:

json
Copy
Edit
{
  "userId": 1,
  "type": "email",
  "message": "This is a test notification."
}
Get Notifications for a User (GET /users/{id}/notifications)
