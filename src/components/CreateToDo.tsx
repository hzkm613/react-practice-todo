import { useForm } from 'react-hook-form'
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { categoryState, toDoState } from './atoms';
import styled from 'styled-components';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

interface IForm {
  toDo: string;
}

const InputWrapper = styled.div`
  position: relative;
  width: 280px;
  height: auto;
  margin-bottom: 24px;
`;

const ToDoInput = styled.input`
  width: 100%;
  height: 100%;
  border: 3px solid transparent;
  border-radius: 10px;
  padding: 16px 12px;
  box-sizing: border-box; 
  transition: border 0.2s; 
  box-shadow: 1px 3px 3px rgba(136, 136, 136, 0.2);
  &:focus {
    outline: none;
    border: 3px solid ${(props) => props.theme.accentColor};
  }
`;

const IconWrapper = styled.button`
  background-color: transparent; 
  height: auto;
  border: none;
  position: absolute;
  top: 50%;
  right: 4px;
  transform: translateY(-50%);
  color: ${(props) => props.theme.accentColor}; 
   cursor: pointer;
`;

const CreateToDo = () => {

  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue} = useForm<IForm>();

  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };

  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <InputWrapper>
      <ToDoInput 
        {...register("toDo", {
          required: "Please write a task",
        })}
        placeholder="Add a task"
      />
      <IconWrapper>
        <AddCircleRoundedIcon />
      </IconWrapper>
    </InputWrapper>
  </form>
  )
}

export default CreateToDo
