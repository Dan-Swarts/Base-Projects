import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import routes from "./routes/index.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the client directory
const clientPath = path.join(__dirname, "../../client/dist");
app.use(express.static(clientPath));
app.use(express.json()); // middleware:
app.use(routes);

// Handle React Routes
app.get("*", (_req, res) => {
  res.sendFile(path.join(clientPath, "index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
