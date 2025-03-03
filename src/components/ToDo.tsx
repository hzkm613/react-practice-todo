import { useRecoilState } from "recoil";
import { IToDo, toDoState } from "./atoms";

const ToDo = ({ text, category, id }:IToDo) => {
  const setToDos = useRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
  }

  return <li>
    <span>{text}</span> 
    {category !== "DOING" && (<button name="DOING" onClick={onClick}>To Do</button>)} 
    {category !== "TO_DO" && (<button name="TO_DO" onClick={onClick}>Doing</button>)} 
    {category !== "DONE" && (<button name="DONE" onClick={onClick}>Done</button>)}    
    </li>;
}

export default ToDo
