import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Todo, TodoItems } from "@/Redux/2-rendered-apps-state/devTodoSlice";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
import DateMonthReminder from "./TM_DateMonthReminder";
import AddTodoListItems from "./TM_AddTodoListItems";
import TodoListItems from "./TM_TodoListItems";
interface TodoMiddleProp {
  styles?: string;
}

const TodoMiddle: React.FC<TodoMiddleProp> = ({ styles }) => {
  const Todos_ = useSelector((state: RootState) => state.devTodo);
  return (
    <main className={`${styles} flex flex-col bg-[#131313] pb-9 `}>
      <DateMonthReminder />
      {Todos_.todo.length > 0 ? (
        <React.Fragment>
          <AddTodoListItems />
          <TodoListItems />
        </React.Fragment>
      ) : (
        <h2 className="text-xl text-center my-0 w-full h-fit text-gray-500 mt-10">
          Create List
        </h2>
      )}
    </main>
  );
};

// Add TodoList Items

// TodoList Items

export default TodoMiddle;
