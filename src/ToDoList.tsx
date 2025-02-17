import React, { useState } from 'react';
import {useForm} from 'react-hook-form';

interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  password1: string;
}

const ToDoList = () => {

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

  const { register, handleSubmit, formState:{errors} } = useForm<IForm>({defaultValues: {
    email: "@naver.com",
  }});
  const onValid = (data:any) => {
    console.log(data);
  };

  return (
    <div>
     <form style={{display: "flex", flexDirection:"column"}} onSubmit={handleSubmit(onValid)}>
     <input  {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver.com emails allowed",
            },
          })}
          placeholder="Email"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register("firstName", { required: "First name is required" })}
          placeholder="First Name"
        />
      <span>{errors?.firstName?.message}</span>
      <input {...register("lastName", { required: "Last name is required" })}
          placeholder="Last Name"
        />
        <span>{errors?.lastName?.message}</span>
        <input {...register("username", { required: "Username must be longer than 3 letters", minLength: 3 })}
          placeholder="Username"
        /> 
         <span>{errors?.username?.message}</span>
         <input {...register("password", { required: "Password must be longer than 5 letters", minLength: 5 })}
          placeholder="Password"
        />
         <span>{errors?.password?.message}</span>
        <input {...register("password1", { required: "Please re-enter the password" })}
            placeholder="Password1" />
          <span>{errors?.password1?.message}</span>
      <button>Add</button>
     </form>
    </div>
   )

}

export default ToDoList;
