const express = require('express');
const axios = require('axios');
const app = express();

// Define the port for the proxy server
const PORT = 3000;

// Middleware to handle CORS (optional, if needed)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Proxy endpoint
app.get('/stream/:url(*)', async (req, res) => {
    try {
        const targetUrl = decodeURIComponent(req.params.url);

        // Fetch the stream with the custom User-Agent
        const response = await axios({
            method: 'GET',
            url: targetUrl,
            headers: {
                'User-Agent': 'M0wRja*Ard5', // Replace with the required User-Agent
            },
            responseType: 'stream',
        });

        // Forward the stream to the client
        res.setHeader('Content-Type', response.headers['content-type']);
        response.data.pipe(res);
    } catch (error) {
        console.error('Error fetching stream:', error.message);
        res.status(500).send('Error fetching stream');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Proxy server running at http://localhost:${PORT}`);
});
