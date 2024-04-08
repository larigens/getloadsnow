const path = require('path');
const express = require('express');
const { createServer } = require('http');

const hostname = 'localhost';
const port = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Allows for rich objects and arrays to be encoded into the URL-encoded format.

// Supports the client side 
// Adds middleware to the Express.js app that serves static files from the client/build directory if the server is running in a production environment.
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build/')));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build/index.html'));
    });
}

// Route handler for the root URL path.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

createServer(app).listen(port, hostname, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port}`);
});
