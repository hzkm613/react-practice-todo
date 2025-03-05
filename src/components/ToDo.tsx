import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "./atoms";
import React from "react";
import styled from "styled-components";

const ToDoContainer = styled.li`
  width: 280px;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: left;
  padding: 16px 10px 0px 10px;
  flex-direction: column;
  margin-bottom: 14px;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: ${(props) => props.theme.btnBackground};
      box-shadow: 1px 3px 3px rgba(136, 136, 136, 0.2);
  `;

  const ToDoText = styled.span`
  font-size: 13px;
  word-wrap: break-word; 
  white-space: normal;  
  overflow-wrap: break-word; 
  max-width: 100%;       
`;

  const ToDoButtonContainer = styled.div`
  width:100%;
  display: flex;
  flex-direction: row; 
  justify-content: start;
  align-items: center;
  margin-top: 14px;
  `;

  const ToDoButton = styled.button`
  padding: 4px;
  margin-right: 2px;
  font-size: 12px;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
    background-color: #FFD1D1; /* Background color for last button */
    &:hover {
      background-color: #FFC6C6; /* Hover color for last button */
    }
  }

  margin-bottom: 16px;
  background-color: #E2E2E2; /* Default background color */
  color: ${(props) => props.theme.textColor};
  border: 3px solid transparent;
  border-radius: 10px;
  padding: 5px 10px;
  transition: border 0.2s;

  &:hover {
    background-color: #D6D6D6; /* Hover color for other buttons */
  }
`;



function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as Categories };
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };

  return <ToDoContainer>
    <ToDoText>{text}</ToDoText> 
    <ToDoButtonContainer>
    {category !== Categories.DOING && (<ToDoButton name={Categories.DOING} onClick={onClick}>Doing</ToDoButton>)} 
    {category !== Categories.TO_DO && (<ToDoButton name={Categories.TO_DO} onClick={onClick}>To Do</ToDoButton>)} 
    {category !== Categories.DONE && (<ToDoButton name={Categories.DONE} onClick={onClick}>Done</ToDoButton>)} 
    <ToDoButton>Delete</ToDoButton> 
    </ToDoButtonContainer>  
    </ToDoContainer>;
}

export default ToDo
