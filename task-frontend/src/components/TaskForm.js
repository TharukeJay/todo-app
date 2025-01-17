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
            <div className="input-group">

                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="input-group">
                <textarea
                    placeholder= "Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <button type="submit" className="add-button">
                Add
            </button>
        </form>
    );
}

export default TaskForm;
