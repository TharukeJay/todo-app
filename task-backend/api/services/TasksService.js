import db from '../utils/db.js'

export const executeGetTask = async () => {

    try {

        const result = await db.any("SELECT * FROM tasks WHERE completed = false ORDER BY id DESC LIMIT 5");
        return result;

    } catch (error) {
        console.error("Error executing :", error);
    }
}

export const executeCreateTask = async (title, description) => {

    try {

        const result = await db.any(
            "INSERT INTO tasks (title, description) VALUES ($1, $2) RETURNING *",
            [title, description]
        );
        return result;

    } catch (error) {
        console.error("Error executing :", error);
    }
}

export const executeUpdateTask = async (id) => {

    try {

        const result = await db.any(
            "UPDATE tasks SET completed = true WHERE id = $1", [id]
        );
        return result;

    } catch (error) {
        console.error("Error executing :", error);
    }
}

export const executeDeleteTask = async (id) => {

    try {

        const result = await db.any(
            "UPDATE tasks SET completed = true WHERE id = $1", [id]
        );
        return result;

    } catch (error) {
        console.error("Error executing :", error);
    }
}
