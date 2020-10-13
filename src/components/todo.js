import React from "react";

function Todo({ todo, todos, setTodos }) {
    function deleteHandler(e) {
        setTodos(todos.filter((el) => el.id !== todo.id));
    }
    function completeHandler(e) {
        setTodos(
            todos.map((el) => {
                if (el.id === todo.id) {
                    return {
                        ...el,
                        completed: !el.completed,
                    };
                }
                return el;
            })
        );
    }
    function setTodoText(e) {
        console.log(e.target.innerHTML);
        e.target.innerHTML = `<input type="text"/>`;
    }
    return (
        <div className="todo">
            <li
                onClick={setTodoText}
                className="todo-item"
            >
                <input className ={`${todo.completed ? "completed-task" :""}`} 
                 type="text" placeholder="Add a Task"/>
            </li>
            <button onClick={completeHandler} className={`complete-btn ${todo.completed? "completed-icon" :"" }`}>
                <i className="fas fa-check-circle"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash-alt"></i>
            </button>
        </div>
    );
}

export default Todo;
