
import express from 'express';
import { registerRoutes } from './_lib/routes';
import path from 'path';

// Create and configure Express app locally in the API function
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files from uploads directory (optional for Vercel, likely handled by blob storage in prod)
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

// Register API routes directly
registerRoutes(app);

// Export the app for Vercel
export default app;
