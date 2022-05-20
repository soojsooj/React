import React from "react";
import TodoItem from "./Todoitem";

function TodoBoard(props) {
    
    return(
        <div>
            <h2>To Do List</h2>
            {props.todoList.map((item)=> <TodoItem item={item} /> )}
        </div>
    )
}

export default TodoBoard