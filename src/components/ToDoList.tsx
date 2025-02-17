import React, { useState } from 'react';
import {useForm} from 'react-hook-form';
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

// interface IForm {
//   email: string;
//   firstName: string;
//   lastName: string;
//   username: string;
//   password: string;
//   password1: string;
// }
interface IForm {
  toDo: string;
}

interface IToDo {
  id:number;
  text:string;
  category: "TO_DO" | "DOING" | "DONE";
}

const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

const ToDoList = () => {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category: "TO_DO" },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("toDo", {
            required: "Please write a To Do",
          })}
          placeholder="Write a to do"
        />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>{toDo.text}</li>
        ))}
      </ul>
    </div>
  );
  // Problem: You will have to manually create states and validations for each form
  //   const [toDo, setToDo] = useState('');
  //   const [toDoError, setToDoError] = useState('');
    
  //   const onChange = (event:React.FormEvent<HTMLInputElement>) => {
  //   const {currentTarget: {value}, } = event;
  //   setToDoError("");
  //   setToDo(value);
  // };
  
  // const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   // console.log(toDo);
  //   if (toDo.length < 10) {
  //     return setToDoError("To do should be longer than 10 letters");
  //   }
  // };
  
  //  return (
  //   <div>
  //    <form onSubmit={onSubmit}>
  //     <input onChange={onChange} value={toDo} placeholder="Add a task" />
  //     <button>Add</button>
  //     {toDoError !== "" ? toDoError : null}
  //    </form>
  //   </div>
  //  )

//   const { register, handleSubmit, formState:{errors}, setError } = useForm<IForm>({defaultValues: {
//     email: "@naver.com",
//   }});

//   const onValid = (data:IForm) => {
//     if(data.password !== data.password1) {
//       setError('password1', {message:"Passwords do not match"}, {shouldFocus: true});
//     }
//   };
// console.log(errors);
//   return (
//     <div>
//      <form style={{display: "flex", flexDirection:"column"}} onSubmit={handleSubmit(onValid)}>
//      <input  {...register("email", {
//             required: "Email is required",
//             pattern: {
//               value: /^[A-Za-z0-9._%+-]+@naver.com$/,
//               message: "Only naver.com emails allowed",
//             },
//           })}
//           placeholder="Email"
//         />
//         <span>{errors?.email?.message}</span>
//         <input
//           {...register("firstName", { required: "First name is required" })}
//           placeholder="First Name"
//         />
//       <span>{errors?.firstName?.message}</span>
//       <input {...register("lastName", { required: "Last name is required" })}
//           placeholder="Last Name"
//         />
//         <span>{errors?.lastName?.message}</span>
//         <input {...register("username", { required: "Username must be longer than 3 letters", validate:(value) => value.includes("admin") ? "You can not use admin as username" : true, minLength: 3 })}
//           placeholder="Username"
//         /> 
//          <span>{errors?.username?.message}</span>
//          <input {...register("password", { required: "Password must be longer than 5 letters", minLength: 5 })}
//           placeholder="Password"
//         />
//          <span>{errors?.password?.message}</span>
//         <input {...register("password1", { required: "Please re-enter the password", minLength: { value: 5, message: "Password must be longer than 5 letters"} })}
//             placeholder="Password1" />
//           <span>{errors?.password1?.message}</span>
//       <button>Add</button>
//      </form>
//     </div>
//    )

}

export default ToDoList;
