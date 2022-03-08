import React from "react";

const Todo2item = ({item2, onDel}) => {
    const {id, text} = item2;
    
    return(
        <li>
            <p>{text}</p>
            <button onClick={() => onDel(item2.id)}>X</button>
        </li>    
    )
}

export default Todo2item;