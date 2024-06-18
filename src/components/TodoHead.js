import { useEffect, useState } from "react";
import { useTodoState } from "./TodoContext";

export default function TodoHead(){

    const todos = useTodoState();
    console.log(todos);
    const undoneTasks = todos.filter(todo => !todo.done);

    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR',{
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const dayName = today.toLocaleDateString('ko-KR',{weekday: 'long'});


    return(
        <div className="todoHead col-left-space">
            <h1>{dateString}</h1>
            <p className="day">{dayName}</p>
            <p>남은 할 일 : <b>{undoneTasks.length}</b>개</p>
        </div>
    );
}