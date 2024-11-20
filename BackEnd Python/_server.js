const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5001;

// Middleware
app.use(bodyParser.json()); // Parse JSON requests
app.use(cors()); // Handle CORS for frontend-backend communication

// Test API endpoint
app.post("/storedata", (req, res) => {
  const { name, email, mobile } = req.body;
  if (!name || !email || !mobile) {
    return res.status(400).json({ message: "All fields are required" });
  }
  console.log("Received Data:", req.body);

  // Simulate successful response
  res.status(200).json({
    message: "Data received and stored successfully!",
    data: req.body,
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

//=====================================================================================================================================

//used mongoDb for database
// const mongoose = require("mongoose");

// // Connect to MongoDB
// mongoose.connect("mongodb://127.0.0.1:27017/mydatabase", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(() => console.log("MongoDB connected"))
//   .catch((error) => console.error("MongoDB connection error:", error));

// // Define a Schema
// const FormDataSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     mobile: String,
// });

// // Create a Model
// const FormData = mongoose.model("FormData", FormDataSchema);

// // Update API to save to MongoDB
// app.post("/storedata", async (req, res) => {
//     try {
//         const { name, email, mobile } = req.body;

//         if (!name || !email || !mobile) {
//             return res.status(400).json({ message: "All fields are required" });
//         }

//         const newData = new FormData({ name, email, mobile });
//         await newData.save(); // Save to MongoDB

//         res.status(200).json({ message: "Data saved to database successfully!" });
//     } catch (error) {
//         console.error("Error saving data:", error);
//         res.status(500).json({ message: "Internal server error" });
//     }
// });
