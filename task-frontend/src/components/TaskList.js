import React from "react";

function TaskList({tasks, markTaskAsCompleted}) {
    return (
        <div className="task-list">
            {tasks.map((task, index) => (
                <div key={index} className="task">
                    <div className="task-details">
                        <h3 className="task-title">{task.title}</h3>
                        <p className="task-description">{task.description}</p>
                    </div>
                    <button className="done-btn"
                            onClick={() => markTaskAsCompleted(task.id)}>
                        Done
                    </button>
                </div>
            ))}
        </div>
    );
}

export default TaskList;
