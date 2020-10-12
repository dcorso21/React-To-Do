import React, { useState, useEffect } from "react";
import "./App.css";
// Importing Components
import ToDoList from "./components/todolist";
import Form from "./components/form";

function App() {
    // Managing State
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all"); // Primary value
    const [filteredTodos, setFilteredTodos] = useState([todos]); // Primary value
    // Use Effect
    useEffect(()=> filterHandler(), [ todos, status]);
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
                <h1>David's ToDo List</h1>
            </header>
            <Form
                todos={todos}
                setTodos={setTodos}
                setInputText={setInputText}
                inputText={inputText}
                setStatus={setStatus}
            />
            <ToDoList
                todos={filteredTodos}
                setTodos={setTodos}
            />
        </div>
    );
}

export default App;
