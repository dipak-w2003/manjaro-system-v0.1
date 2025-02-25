import React, { useEffect } from "react";
import TodoLeft from "./TodoLeft";
import TodoMiddle from "./TodoMiddle";
import TodoRight from "./TodoRight";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/Redux/store";
import { addTodoListItems } from "@/Redux/2-rendered-apps-state/devTodoSlice";
import { todo } from "node:test";

interface TodoProps {
  children?: React.ReactNode;
}

const TodoApp: React.FC<TodoProps> = ({ children }) => {
  const Todos = useSelector((state: RootState) => state.devTodo);
  // console.log(Todos.todo[Todos.activeIndex]);
  const dispatch: AppDispatch = useDispatch();

  const clickMe = () =>
    dispatch(
      addTodoListItems({
        date: String(new Date()),
        id: "111",
        isCompleted: true,
        priority: "high",
        tag: "#ff",
        todoTitle: "Gym",
      })
    );
  return (
    <main
      className={`bg-[#252525] h-full overflow-hidden  w-full flex noto-sans `}
    >
      <TodoLeft styles="w-[20%] h-full  " todoList={Todos} />
      <TodoMiddle
        styles="w-[50%] *:w-full  h-full overflow-hidden "
        todoListIndex={Todos.activeIndex}
      />
      <TodoRight styles="w-[30%] h-full overflow-hidden " />
      <button onClick={clickMe}>Add</button>
    </main>
  );
};

export default TodoApp;
