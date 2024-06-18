import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import { useTodoDispatch, useTodoNextId } from "./TodoContext";
import styled, { css } from "styled-components";

const CircleButton = styled.button`
    background: #ff8197;
    &:hover{
        background: #ff8197;
    }
    &:active{
        background: #ff8197;
    }    
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 60px;
    color: white;
    border-radius: 50%;
    cursor: pointer;
    z-index: 5;
    position: absolute;
    left: 50%;
    bottom: 0px;
    transform: translate(-52%, 50%);
    border: none;
    outline: none;

    transition: 0.125s all ease-in;
  ${props =>
    props.open &&
    css`
      background: #ababab;
      &:hover {
        background: #ababab;
      }
      &:active {
        background: #ababab;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

function TodoCreate(){

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');

    const dispatch = useTodoDispatch();
    const nextId = useTodoNextId();

    const onToggle = () => {
        setOpen(!open);
    }

    const onChange = (e) => {
        setValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();//새로고침 방지
        
        console.log("입력");
        dispatch({
            type: 'CREATE',
            todo: {
                id: nextId.current,
                text: value,
                done: false
            }
        })
        setValue('');
        setOpen(false);
        nextId.current += 1;
        
    }

    return(
        <>
           {open && (
            <div className="todoCreate">
                <form className="insertForm" onSubmit={onSubmit}>
                    <input autoFocus placeholder="할 일을 입력 후, Enter를 누르세요" onChange={onChange} value={value}/>
                </form>
            </div>
           )} 
           <CircleButton onClick={onToggle} open={open}>
            <MdAdd/>
           </CircleButton>
        </>
    );
}

export default React.memo(TodoCreate);