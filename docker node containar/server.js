// index.js
import express from "express";
import { config } from "dotenv";
import fetch from "node-fetch"; // Required for Node.js fetch

// Load environment variables from .env file
config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware (optional, for JSON parsing)
app.use(express.json());

// Endpoint to get all posts (limit 30)
app.get("/posts", async (req, res) => {
  try {
    const response = await fetch(
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ error: "Error fetching posts" });
  }
});

// Endpoint to get a single post by ID
app.get("/posts/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    if (!response.ok) {
      return res.status(response.status).json({ error: "Post not found" });
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching post by id:", error);
    res.status(500).json({ error: "Error fetching post by id" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
