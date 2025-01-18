import React, {useState} from "react";
import { ClipLoader } from "react-spinners";

function TaskForm({addTask}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        setLoading(true);
        e.preventDefault();
        if (!title.trim() || !description.trim()) return;
        addTask(title, description);
        setTitle("");
        setDescription("");
        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <div className="input-group">

                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div className="input-group">
                <textarea
                    placeholder= "Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className="add-button">
                {loading ? <ClipLoader size={20} color="white" /> : "Add"}
            </button>
        </form>
    );
}

export default TaskForm;
