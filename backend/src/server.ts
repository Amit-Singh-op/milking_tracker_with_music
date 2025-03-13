import express, { Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db";
import sessionRoutes from "./routes/sessionRoutes";
import errorHandler from "./middleware/errorHandler";
import logger from "./utils/logger";

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app: Application = express();

// Middleware
app.use(express.json());
app.use(cors());
logger(app);

// Routes
app.use("/api/sessions", sessionRoutes);

// Error Handling Middleware
app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
