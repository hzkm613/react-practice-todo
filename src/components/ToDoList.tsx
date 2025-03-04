import { useRecoilState, useRecoilValue} from 'recoil';
import { Categories, categoryState, toDoSelector } from './atoms';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';
import styled from 'styled-components';
// interface IForm {
//   email: string;
//   firstName: string;
//   lastName: string;
//   username: string;
//   password: string;
//   password1: string;
// }

 const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
 `;

 const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 32px;
  `;

const ToDoList = () => {
  // const toDos = useRecoilValue(toDoState);
  const toDos = useRecoilValue(toDoSelector);
  //const [toDo, doing, done] = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);

  const onInput = (event:React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };

  return (
    <Wrap>
      <Title>To Dos 📝</Title>
      <select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>
      <CreateToDo />
      {toDos?.map((toDo) => (<ToDo key={toDo.id} {...toDo} />))}
      {/* <h2>To Do</h2>
      <ul>
        {toDo.map((toDo) => <ToDo key={toDo.id} {...toDo} />)}
      </ul>
      <hr />
      <h2>Doing</h2>
      <ul>
        {doing.map((toDo) => <ToDo key={toDo.id} {...toDo} />)}
      </ul>
      <hr />
      <h2>Done</h2>
      <ul>
        {done.map((toDo) => <ToDo key={toDo.id} {...toDo} />)}
      </ul>
      <hr /> */}
      
    </Wrap>
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
