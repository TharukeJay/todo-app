import React, {useEffect, useState} from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./styles.css";
import API_ENDPOINT from "./ApiGateway/gateway";
import {CREATE_A_TASK, FETCH_ALL_TASKS, UPDATE_A_TASK} from "./ApiGateway/endpoints";
import ScreenLoading from "./components/loading/loading";
import Loading from "react-loading";

function App() {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchTasks();
    }, [])


    // Add a new task
    const addTask = async (title, description) => {
        const res = await API_ENDPOINT.post(CREATE_A_TASK, {title, description}).then(() => {
            fetchTasks();
            // setTasks(updatedTasks);
        });
        // const newTask = { id: Date.now(), title, description, completed: false };
        // const updatedTasks = [newTask, ...tasks].slice(0, 5); // Keep only the most recent 5 tasks

    };

    // Mark task as completed
    const markTaskAsCompleted = async (taskId) => {
        console.log(taskId);
        const res = await API_ENDPOINT.post(UPDATE_A_TASK + taskId).then(() => {
            fetchTasks()
        })
        // setTasks(tasks.filter((task) => task.id !== taskId)); // Remove the task
    };

    const fetchTasks = async () => {
        setLoading(true);
        const res = await API_ENDPOINT.get(FETCH_ALL_TASKS)
        console.log(res.data)
        setTasks(res.data)
        setLoading(false);
    }

    // if (loading) {
    //   return <ScreenLoading />
    // }

    return (
        // <div className="app">
        //     {loading ? <Loading/> :
        //         <div className="task-container">
        //             <TaskForm addTask={addTask}/>
        //             <div className="vl"></div>
        //             <TaskList tasks={tasks} markTaskAsCompleted={markTaskAsCompleted}/>
        //         </div>
        //     }
        // </div>

        // <div>
        //     <div className="container">
        //             <div className="task-form">
        //                 <TaskForm addTask={addTask}/>
        //             </div>
        //
        //             <div className="task-list">
        //                 <TaskList tasks={tasks} markTaskAsCompleted={markTaskAsCompleted}/>
        //             </div>
        //     </div>
        // </div>

        <>
            <div className="task-container">
                <div className="left-section">
                    <h2 className="heading">Add a Task</h2>
                    <TaskForm addTask={addTask}/>
                </div>
                <div className="right-section">
                    <TaskList tasks={tasks} markTaskAsCompleted={markTaskAsCompleted}/>
                </div>
                </div>
            </>
            );
            }

            export default App;
