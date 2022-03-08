import React, {useRef, useState}from "react";

const Todo2form = ({onAdd}) => {
    const textRef = useRef('')
    const [text, setText] = useState('')
    const InputChange = (e) => {
        const {value} = e.target;
        setText(value);
    }
    const on_Submit = (e) => {
        e.preventDefault();
        //  이벤트 중지
        if(!text) return
        // ! <- 논리 부정연산 true/false 반환
        // !! <- 이중 부정 연산자 부정의부정
        onAdd(text)
        setText('')
        textRef.current.focus()
        //  focus() <=> blur()
    }
    return(
        <form className="Todo2form" onSubmit={on_Submit}>
            <input type="text" value={text} onChange={InputChange} ref={textRef} placeholder="입력하세요"></input>
            <button type="submit">Add</button>
        </form>
        
    )
}

export default Todo2form;