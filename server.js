const cors = require('cors');
const express = require('express');
const app = express();
const port = 5001;

app.use(express.json());

// app.post('/submit-data', async (req, res) => {
//     try {
//         const response = await fetch('https://api-connect.mclogs.com/tickets', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(req.body)
//         });

//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const data = await response.json();
//         res.status(200).json(data);
//     } catch (error) {
//         console.error('Error calling external API:', error);
//         res.status(500).json({ message: 'Failed to call external API', details: error.message });
//     }
// });

// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });

// app.post('/submit-data', async (req, res) => {
//     try {
//         // Just send back a simple response or echo the received request
//         res.status(200).json({ message: "Received", data: req.body });
//     } catch (error) {
//         console.error('Error:', error);
//         res.status(500).json({ message: 'Failed due to an internal error', details: error.message });
//     }
// });



// Enable CORS for requests from your frontend
app.use(cors({
    origin: 'http://localhost:3000',  // This should match the origin of your frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true  // If credentials like cookies or authorization headers are needed
}));

// Define a GET route for the root URL
app.get('/', (req, res) => {
    res.send('Hello from Express! The server is running.');
});

// POST endpoint to handle data submissions
app.post('/submit-data', (req, res) => {
    console.log("Received data:", req.body);  // Logs the entire body
    if (req.body.titulo) {
        console.log("Received message:", req.body.titulo);  // Logs just the message part
    }
    res.json({
        status: "success",
        message: "Data received successfully",
        receivedData: req.body
    });
});



// Start the server on the specified port
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
