import React, { useEffect } from "react";
import TodoLeft from "./TodoLeft";
import TodoMiddle from "./TodoMiddle";
import TodoRight from "./TodoRight";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/store";

interface TodoProps {
  children?: React.ReactNode;
}

const TodoApp: React.FC<TodoProps> = ({ children }) => {
  const Todos = useSelector((state: RootState) => state.devTodo);
  // console.log(Todos.todo[Todos.activeIndex]);

  const allReminders = Todos.todo.flatMap((list) =>
    (list.items ?? []).filter((item) => item.reminder && !item.isCompleted)
  );

  return (
    <main
      className={`bg-[#252525] h-full overflow-hidden  w-full flex noto-sans  `}
    >
      <TodoLeft styles="w-[20%] h-full" todoList={Todos} />
      <TodoMiddle styles="w-[50%] *:w-full  h-full overflow-hidden " />
      <TodoRight styles="w-[30%] h-full overflow-hidden " />
    </main>
  );
};

export default TodoApp;
