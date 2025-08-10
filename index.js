// nodejs ==> expressjs ==>
// 1 step:
// INSTALL IMPORTANT PACKAGES

// npm init
// npm install express cors body-parser
// npm install -g nodemon

// 2 step:
// CREATE index.js
// SERVER Create a simple server

// 50% - 60% done

// 3 Step:
// Database creation and connection
// 4 Step:
// creating APIs for the server
// Types of APIs
// POST, GET, PUT, DELETE

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser'; // OPTIONAL
import authenticate from './middleware.js';
import DatabaseConnection from './Database.js';
import UserModel from './Model/User.js';


const app = express();
const port = 3001;

DatabaseConnection();

app.use(cors());
app.use(bodyParser.json());

// We receive the data from the frontend and than it goes to middleware() and check it and than send it to the api function
// Query parameters && Search Parameter
// Middleware
// Configuration with database
// Frontend Configuration
app.get('/server-api', async (req, res) => {

    const users = await UserModel.find({})
    console.log("THIS IS THE BACKEND API FOR GET REQUEST");
    res.status(200).send({ message: 'Hello World! This is a simple server.', users });

});



app.post('/server-api', authenticate, async (req, res) => {
    const data = req.body;

    const user = new UserModel(data);
    await user.save()

    console.log("THIS IS THE BACKEND API FOR POST REQUEST", data);
    res.status(201).send({ message: 'Hello World! This is a a server api.', data });
});


// Query parameters && Search Parameter
app.delete('/server-api', async (req, res) => {
    const data = req.body;
    console.log("THIS IS THE BACKEND API FOR DELETE REQUEST", data);
    res.status(204).send();
});

app.put('/server-api', async (req, res) => {
    const data = req.body;
    console.log("THIS IS THE BACKEND API FOR PUT REQUEST", data);
    res.status(200).send({ message: 'Hello World! This is a a server api.', data });
});



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// mongodb // 1. Install MongoDB
// mongoDb compass
// postman