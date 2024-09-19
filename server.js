// server.js

const express = require('express');
const app = express();

// Serve static files from the root directory
app.use(express.static(__dirname));

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
