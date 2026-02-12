
import { registerRoutes } from "../server/routes";
import express from "express";

const app = express();

// Basic middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Initialize the routes
// Note: registerRoutes is async, so we use top-level await (ESM)
// Vercel serverless functions support this.
await registerRoutes(app);

// Vercel expects the app to be exported
export default app;
