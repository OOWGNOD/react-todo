import React from "react";
import Todoitem from "./todoitem";
const TodoList = ({todo, onToggle, onDel}) => {
    return(
        <ul className="Todolist">
            {
                todo.map(item => <Todoitem key={item.id} item={item} onToggle={onToggle} onDel={onDel}/>)
            }
            </ul>
    )
}

export default TodoList;