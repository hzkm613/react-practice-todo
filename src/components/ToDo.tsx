import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "./atoms";
import React from "react";

const ToDo = ({ text, category, id }: IToDo) => {

  const setToDos = useSetRecoilState(toDoState);

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;

    setToDos((oldToDos) => {
      const targetIndex: number = oldToDos.findIndex((toDo: IToDo) => toDo.id === id);
      const newToDo = {text,id , category: name as 'TO_DO' | 'DOING' | 'DONE'};
      return [...oldToDos.slice(0, targetIndex), newToDo, ...oldToDos.slice(targetIndex + 1)];
    });  
  }

  return <li>
    <span>{text}</span> 
    {category !== "DOING" && (<button name="DOING" onClick={onClick}>To Do</button>)} 
    {category !== "TO_DO" && (<button name="TO_DO" onClick={onClick}>Doing</button>)} 
    {category !== "DONE" && (<button name="DONE" onClick={onClick}>Done</button>)}    
    </li>;
}

export default ToDo
