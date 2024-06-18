import { MdDelete, MdDone } from "react-icons/md";
import styled, {css} from "styled-components";
import { useTodoDispatch } from "./TodoContext";
import React from "react";

const Text = styled.div`
 text-align: left;
 width: 75%;
 ${props=>
     props.done &&
     css`
         color: #ced4da;
     `
 }
`

function TodoItem({id, done, text}){

    const dispatch = useTodoDispatch();
    const onToggle = () => dispatch({type: 'TOGGLE', id});
    const onRemove = () => dispatch({type: 'REMOVE', id});

    return(
        <div id="todoItem" className="todoItem w75p">
            <div className="circle" done={done} onClick={onToggle}>{done && <MdDone/>}</div>
            <Text done={done}>{text}</Text>
            <div id="remove" className="remove" onClick={onRemove}><MdDelete/></div>
        </div>
    );
}

export default React.memo(TodoItem);