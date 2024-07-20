**What is Express?**
Express is a web framework for Node.js
Express is a server-side or back-end framework.

**Why use Express?**
Makes building web appplications with Node.js MUCH easier
Extremley light, fast and free
full control of request andn response


**BASIC SERVER SYNTAX**

Express.js is a popular web application framework for Node.js that simplifies the process of building robust and scalable web applications. Below is the basic syntax for creating a simple server using Express.js:

1. **Install Express:**
   First, make sure you have Node.js installed on your machine. If not, you can download it from [nodejs.org](https://nodejs.org/).

   Then, in your project directory, initialize a new Node.js project by running:

   ```bash
   npm init -y
   // To install package.json
   ```

   After that, install Express:

   ```bash
   npm install express
   ```

2. **Create an Express Server:**
   Create a file (e.g., `app.js`) and write the following code to create a basic Express server:

   ```javascript
   // Import the Express module
   const express = require('express');

   // Create an Express application
   const app = express();

   // Define a route for the root endpoint
   app.get('/', (req, res) => {
     res.send('Hello, Express!');
   });

   // Specify the port to listen on
   const port = 3000;

   // Start the server and listen on the specified port
   app.listen(port, () => {
     console.log(`Server is listening on port ${port}`);
   });
   ```

   This code does the following:

   - Imports the Express module.
   - Creates an Express application.
   - Defines a route for the root endpoint (`/`) that sends a "Hello, Express!" message when accessed.
   - Specifies the port (in this case, 3000) on which the server will listen.
   - Starts the server and outputs a message to the console when it's successfully running.

3. **Run the Server:**
   Save the file (`app.js`) and run your server using the following command in the terminal:

   ```bash
   node app.js
   ```

   You should see the message "Server is listening on port 3000" in the console. Now, if you open your web browser and navigate to `http://localhost:3000/`, you should see the "Hello, Express!" message.

This is a very basic example, and Express provides a wide range of features and middleware for handling routes, templates, database connections, and more. As your application grows, you can expand and organize your code using the various features provided by Express.js.



**Express Middleware** : Middleware functions are functions that have access to the request and response object.
Express has built in middleware but middleware also comes from 3rd party packages as well as we can make our custom middleware.

**Middleware Use For**
- Execute any code
- Make changes to the request/response object
- End response code
- call next middleware in the stack