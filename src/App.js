// import anime from "animejs/lib/anime.es";
import React, { useState, useEffect } from "react";
import "./App.css";
// Importing Components
import ToDoList from "./components/todolist";
import Form from "./components/form";
import AddTask from "./components/addTask";

function App() {
    // Managing State
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all"); // Primary value
    const [filteredTodos, setFilteredTodos] = useState([todos]); // Primary value
    // Use Effect
    useEffect(filterHandler, [todos, status]);
    function filterHandler() {
        switch (status) {
            case "completed":
                setFilteredTodos(todos.filter((todo) => todo.completed));
                break;
            case "uncompleted":
                setFilteredTodos(todos.filter((todo) => !todo.completed));
                break;
            default:
                setFilteredTodos(todos);
            // break;
        }
    }
    return (
        <div className="App">
            <header>
                <h1>To Do</h1>
            </header>
            <Form setStatus={setStatus} />
            <ToDoList todos={filteredTodos} setTodos={setTodos} />
            <AddTask
                todos={todos}
                setTodos={setTodos}
                setInputText={setInputText}
                inputText={inputText}
            />
        </div>
    );
}

export default App;
