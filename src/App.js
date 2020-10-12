import React, { useState } from "react";
import "./App.css";
// Importing Components
import ToDo from "./components/todolist";
import Form from "./components/form";

function App() {
    const [inputText, setInputText] = useState("");
    return (
        <div className="App">
            <header>
    <h1>David's ToDo List</h1>
            </header>
            <Form  setInputText = {setInputText}/>
            <ToDo />
        </div>
    );
}

export default App;
