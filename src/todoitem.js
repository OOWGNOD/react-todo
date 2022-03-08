import React from "react";

const Todoitem = ({item, onToggle, onDel}) => {
    const {id, text, check} = item;

    return(
        // check 값이 true인지 false인지에 따라 true일 경우 class에 on을 줌
        <li className={check ?`on`: ""}>
            <span onClick={()=>onToggle(id)}>{text}</span>
            <button onClick={()=> onDel(id)}>X</button>    
        </li>
)

}
export default Todoitem;