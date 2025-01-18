import React, {useEffect, useState} from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./styles.css";
import API_ENDPOINT from "./ApiGateway/gateway";
import {CREATE_A_TASK, FETCH_ALL_TASKS, UPDATE_A_TASK} from "./ApiGateway/endpoints";
import {ClipLoader} from "react-spinners";

function App() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchTasks();
    }, [])


    // Add a new task
    const addTask = async (title, description) => {
        const res = await API_ENDPOINT.post(CREATE_A_TASK, {title, description}).then(() => {
            fetchTasks();
        });
    };

    // Mark task as completed
    const markTaskAsCompleted = async (taskId) => {
        console.log(taskId);
        const res = await API_ENDPOINT.post(UPDATE_A_TASK + taskId).then(() => {
            fetchTasks()
        })
    };

    // Fetch all tasks
    const fetchTasks = async () => {
        setLoading(true);
        // const res = await API_ENDPOINT.get(FETCH_ALL_TASKS)
        // console.log(res.data)
        // setTasks(res.data)
        // setLoading(false);
    }


    return (<>
        <div className="task-container">
            <div className="left-section">
                <h2 className="heading">Add a Task</h2>
                <TaskForm addTask={addTask}/>
            </div>
            <div className="right-section">
                {loading ? <ClipLoader size={20} color="blue"/> :
                    <TaskList tasks={tasks} markTaskAsCompleted={markTaskAsCompleted}/>}
            </div>
        </div>
    </>);
}

export default App;
