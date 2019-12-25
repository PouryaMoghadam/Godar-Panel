// Use dotenv Config Package
const dotenv = require('dotenv');
// Express Package and Next Package For Run server
const express = require('express');
const cors = require('cors');
const next = require('next');
const routes = require('./routes');
// i18n Packages for Insert Language Middleware
const nextI18NextMiddleware = require('next-i18next/middleware').default;
const nextI18next = require('../config/i18n.js');
// Config dotenv File
dotenv.config();

const port = parseInt(process.env.PORT, 10) || 3000; // Port Application Run Load From dotenv File
const dev = process.env.NODE_ENV !== 'production'; // Application Run Environment Load From dotenv File
const app = next({ dev }); // Add Loaded Config to Application
// const handle = app.getRequestHandler(); // Application Server Request Handler
const handler = routes.getRequestHandler(app);
const { createServer } = require('http');

app.prepare()
    .then(() => {
        // Run Express Server
        const server = express();
        // Add i18n Middleware to Server
        server.use(nextI18NextMiddleware(nextI18next));
        server.use(cors({origin: true, credentials: true}));
        // Handle All Server Requests And Responses
        server.all('*', (req, res) => {
            return handler(req, res);
        });
        // Server Listen Port Config
        createServer(handler).listen(port, err => {
            if (err) throw err;
            console.log(`> Ready on http://localhost:${port}`);
        });
    })
    // Application Catch Error On Run Server
    .catch(ex => {
        console.error(ex.stack);
        process.exit(1);
    });
