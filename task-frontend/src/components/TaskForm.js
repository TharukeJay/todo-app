import React, {useState} from "react";

function TaskForm({addTask}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim() || !description.trim()) return;
        addTask(title, description);
        setTitle("");
        setDescription("");
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <h3>Add a Task</h3>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default TaskForm;
