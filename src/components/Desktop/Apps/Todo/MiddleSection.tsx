import React from "react";
import { IStyleClassProps } from "../../kde/KdeApp";
import { TodoItems } from "@/Redux/2-rendered-apps-state/devTodoSlice";

interface TodoPROPSM {
  styles: string;
  todoListItems?: TodoItems;
}
const MiddleSection: React.FC<TodoPROPSM> = ({ styles ,todoListItems}) => {
  return (
    <div style={{ background: "white" }} className={`${styles} bg-white`}>
      MiddleSection
    </div>
  );
};

export default MiddleSection;
