import {executeCreateTask, executeDeleteTask, executeGetTask, executeUpdateTask} from "../services/TasksService.js";

//
export const getTask = async (req, res, next) => {

    try {
        const data = await executeGetTask();
        res.status(200).json(data);
    } catch (error) {
        console.error("Error getting documents:", error);
        res.status(500).json({
            status: "500",
            error: error.message,
        });
    }
}

export const createTask = async (req, res, next) => {

    const { title, description } = req.body;

    if (!title) {
        return res.status(400).json({ error: 'title is required' });
    }

    if (!description) {
        return res.status(400).json({ error: 'title is required' });
    }

    try {
        const data = await executeCreateTask(title, description);
        res.status(200).json(data);
    } catch (error) {
        console.error("Error getting documents:", error);
        res.status(500).json({
            status: "500",
            error: error.message,
        });
    }
}

export const updateTask = async (req, res, next) => {

    const { id } = req.params;

    try {
        const data = await executeUpdateTask(id);
        res.status(200).json(data);
    } catch (error) {
        console.error("Error getting documents:", error);
        res.status(500).json({
            status: "500",
            error: error.message,
        });
    }
}

export const deleteTask = async (req, res, next) => {

    const { id } = req.params;

    try {
        const data = await executeDeleteTask(id);
        res.status(200).json(data);
    } catch (error) {
        console.error("Error getting documents:", error);
        res.status(500).json({
            status: "500",
            error: error.message,
        });
    }
}

