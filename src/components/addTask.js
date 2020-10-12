import React from "react";

function AddTask({ setInputText, inputText, todos, setTodos, setStatus }) {
    // const inputTextHandler = (e) => {
    //     // console.log(e.target.value);
    //     setInputText(e.target.value);
    // };
    const submitToDoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            { text: inputText, completed: false, id: Math.random() * 1000 },
        ]);
        setInputText("");
    };
    return (
        <form>
            {/* <input
                value={inputText}
                onChange={inputTextHandler}
                type="text"
                className="todo-input"
            /> */}
            <button
                onClick={submitToDoHandler}
                className="todo-button"
                type="submit"
            >
                {/* <i className="fas fa-plus-square"></i> */}
                <i className="fas fa-plus-circle"></i>
            </button>
        </form>
    );
}

export default AddTask;
