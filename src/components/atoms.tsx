import { atom, selector } from "recoil";

// type categories =  "TO_DO" | "DOING" | "DONE";

export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}
export interface IToDo {
  id:number;
  text:string;
  category: Categories;
}

export const categoryState = atom<Categories>({
 key: "category",
 default: Categories.TO_DO,
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

// Seperate the toDoState into three categories
export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);

    return toDos.filter((toDo) => toDo.category === category);
    // return [
    //   toDos.filter((toDo) => toDo.category === "TO_DO"),
    //   toDos.filter((toDo) => toDo.category === "DOING"), 
    //   toDos.filter((toDo) => toDo.category === "DONE")];
}
});
