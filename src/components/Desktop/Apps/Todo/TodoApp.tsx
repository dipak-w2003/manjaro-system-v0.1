import React, { useEffect } from "react";
import TodoLeft from "./TodoLeft";
import TodoMiddle from "./TodoMiddle";
import TodoRight from "./TodoRight";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/Redux/store";
import { addTodoListItems } from "@/Redux/2-rendered-apps-state/devTodoSlice";

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
        date: "27/02/2025",
        id: "111",
        isCompleted: false,
        priority: "high",
        tag: "#code",
        todoTitle: "Fix line 88 : App.tsx",
      })
    );
  return (
    <main
      className={`bg-[#252525] h-full overflow-hidden  w-full flex noto-sans  `}
    >
      <TodoLeft styles="w-[20%] h-full  " todoList={Todos} />
      <TodoMiddle styles="w-[50%] *:w-full  h-full overflow-hidden " />
      <TodoRight styles="w-[30%] h-full overflow-hidden " />
    </main>
  );
};

export default TodoApp;
