
// Import Express framework.
const express = require("express");

// Import path module to locate the public folder.
const path = require("path");

// Import the food database singleton.
const foodStore = require("./foodDatabase");

// Create the Express application.
const app = express();

// Setup JSON middleware to handle JSON data.
app.use(express.json());

// Serve frontend files from the public folder.
app.use(express.static(path.join(__dirname, "../public")));

// GET /foods route to retrieve all food items.
app.get("/foods", (req, res) => {

    console.log("GET /foods request received");

    // Get all food items from the singleton database.
    const foods = foodStore.getAll();

    console.log("Food items retrieved:", foods);

    // Send food items as JSON with status code 200.
    res.status(200).json(foods);
});

// Handle requests to routes that do not exist.
app.use((req, res) => {

    console.log("404 - Route not found:", req.originalUrl);

    res.status(404).json({
        message: "Route not found"
    });
});

// Start the server on port 3000.
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Export the application for automated testing.
module.exports = app;
