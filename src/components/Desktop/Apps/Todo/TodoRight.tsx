import React, { useEffect, useState } from "react";
import { IStyleClassProps } from "../../kde/KdeApp";
import "./TR_Calendar.css";
import TR_Calendar from "./TR_Calendar";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
const TodoRight: React.FC<IStyleClassProps> = ({ styles }) => {
  // const DevTodo = useSelector((state: RootState) => state.devTodo);
  // const DT$Items = DevTodo.todo[DevTodo.activeIndex].items || [];

  return (
    <main className={`${styles} flex flex-col items-center`}>
      <TR_Calendar />
    </main>
  );
};

export default TodoRight;
