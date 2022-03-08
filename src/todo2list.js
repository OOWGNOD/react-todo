import React from "react";
import Todo2item from "./todo2item";

const Todo2list = ({todo2, onDel}) => {
    return(
        <ul className="todolist2">
            {
               todo2 && todo2.map(item2 => <Todo2item key={item2.id} item2={item2} onDel={onDel}/>)
            }
        </ul>
    )
}

export default Todo2list;