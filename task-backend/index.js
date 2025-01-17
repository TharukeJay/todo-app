
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from  'cookie-parser';
import http from 'http';
import db from './api/utils/db.js'

import taskRoutes from "./api/routes/TasksRoutes.js";

// Load environment variables from .env file
dotenv.config();

const app = express();
const server = http.createServer(app);

// Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors({ origin: "*" }));
app.use(cookieParser());

const port = process.env.PORT || 10000;


const createTable = async () => {
    try {
        const query = `
      CREATE TABLE IF NOT EXISTS tasks (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        completed BOOLEAN DEFAULT false
      );
    `;
        await db.query(query);
        console.log("✅ Tasks table is ready.");
    } catch (err) {
        console.error("❌ Error creating tasks table:", err);
    }
};

// Ensure table creation only after DB connection
db.connect()
    .then(async () => {
        console.log("✅ Database connected. Checking tables...");
        await createTable();
        server.listen(port, () => {
            console.log(`🚀 Server running on port ${port}`);
        });
    })
    .catch(err => console.error("❌ Database connection failed:", err));

app.use("/api/task", taskRoutes);

export default app; // export for tests
