import React, {useRef, useState} from "react";
import Todo2form from "./todo2form";
import Todo2list from "./todo2list";

const Todo2 = () => {
    const no = useRef(1);
    const [todo2, setTodo2] = useState([])

    const onDel = (id) => {
        setTodo2(todo2.filter(todo2 => todo2.id !== id))
        
    }

    const Add_on = (text) => {
        setTodo2([
            ...todo2,
            // 리터럴 
            {
                id : no.current++,
                text,
                check: false
            }
        ])
    }
    return(
        <div className="Todos2">
            <h1>Todo2 List</h1>
            <Todo2form onAdd={Add_on}/>
            <Todo2list todo2={todo2} onDel={onDel}/>
            </div>
    )
}

export default Todo2;