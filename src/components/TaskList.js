import React from "react";

function TaskList({ tasks, markTaskAsCompleted }) {
    return (
        <div>
            {tasks.map((task) => (
                <div className="task" key={task.id}>
                    <div className="task-details">
                        <h4>{task.title}</h4>
                        <p>{task.description}</p>
                    </div>
                    <button
                        className="done-btn"
                        onClick={() => markTaskAsCompleted(task.id)}
                    >
                        Done
                    </button>
                </div>
            ))}
        </div>
    );
}

export default TaskList;
