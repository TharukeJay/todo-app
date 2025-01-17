import express from "express";
import {logger} from "../utils/logger.js";
import {createTask, deleteTask, getTask, updateTask} from "../controller/TaskControllers.js";

const router = express.Router();

router.post("/task-create", logger, createTask);
router.get("/task-get", logger, getTask);
router.post("/task-update/:id", logger, updateTask);
router.post("/task-delete/:id", logger, deleteTask);

export default router;
