// import dependancies
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = process.env.PORT || 3000; // You can choose any port you like

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, "dist")));

// Serve the index.html file for any other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

// Define your API routes here
app.get("/api", (req, res) => {
  res.send("Hello from the API!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
