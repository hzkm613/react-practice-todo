import { atom, selector } from "recoil";

export interface IToDo {
  id:number;
  text:string;
  category: "TO_DO" | "DOING" | "DONE";
}

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

// Seperate the toDoState into three categories
export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    return [
      toDos.filter((toDo) => toDo.category === "TO_DO"),
      toDos.filter((toDo) => toDo.category === "DOING"), 
      toDos.filter((toDo) => toDo.category === "DONE")];
}
});
