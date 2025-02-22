import React, { useEffect } from "react";
import LeftSection from "./LeftSection";
import MiddleSection from "./MiddleSection";
import RightSection from "./RightSection";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/Redux/store";
import { addTodoListItems } from "@/Redux/2-rendered-apps-state/devTodoSlice";

interface IPROPS {
  children?: React.ReactNode;
}

const TodoApp: React.FC<IPROPS> = ({ children }) => {
  const Todos = useSelector((state: RootState) => state.devTodo);
  console.log(Todos);
  const dispatch: AppDispatch = useDispatch();

  const Clickme = () =>
    dispatch(
      addTodoListItems({
        date: String(new Date()),
        id: "111",
        isCompleted: false,
        priority: "high",
        tag: "#ff",
        todoTitle: "Gym",
      })
    );
  return (
    <main
      className={`bg-[#252525] h-full overflow-hidden  w-full flex noto-sans `}
    >
      <LeftSection styles="w-[20%] h-full  " todoList={Todos} />
      <MiddleSection
        styles="w-[50%] bg-[#ffffff] h-full overflow-hidden "
        // todoListItems={Todos.todo[Todos.activeIndex].items}
      />
      <RightSection styles="w-[30%] h-full overflow-hidden " />
      <button onClick={Clickme}>Add</button>
    </main>
  );
};

export default TodoApp;
