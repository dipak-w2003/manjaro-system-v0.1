import React, { useState, useCallback, useEffect } from "react";
import clover from "./clover.svg";
import {
  addTodoList,
  setActiveIndex,
  updateTodoListTitle,
  TodoState,
  removeTodoList,
} from "@/Redux/2-rendered-apps-state/devTodoSlice";
import { AppDispatch } from "@/Redux/store";
import { useDispatch } from "react-redux";
import { RxCross2 } from "react-icons/rx";

interface TodoPROPS {
  styles: string;
  todoList?: TodoState;
}

const LeftSection: React.FC<TodoPROPS> = ({ styles, todoList }) => {
  const { todo = [], activeIndex } = todoList || {};

  const dispatch: AppDispatch = useDispatch();

  // update Title
  // State to temporarily store edited titles before updating Redux
  const [tempTitles, setTempTitles] = useState<{ [key: number]: string }>({});

  // Updates local state when the user types
  const handleChange = (index: number, value: string) => {
    setTempTitles((prev) => ({ ...prev, [index]: value }));
  };
  // Updates Redux when input loses focus, only if the title has changed
  const handleBlur = (index: number) => {
    if (
      tempTitles[index] !== undefined &&
      tempTitles[index] !== todoList?.todo[index]?.listTitle
    ) {
      dispatch(
        updateTodoListTitle({ listIdx: index, newTitle: tempTitles[index] })
      );
    }
  };

  return (
    <main className={`${styles} relative`}>
      <span className="text-4xl flex items-center justify-center mt-10 gap-5 cursor-pointer">
        <img src={clover} alt="Logo" />
        <h2>Dev Todo</h2>
      </span>

      {/* List container */}
      <section className="my-lists-container p-2 mt-[90px] h-[80%] overflow-scroll pb-8">
        <h4 className="text-xl absolute top-36 underline">My Lists</h4>

        <div className="lists flex flex-col justify-around p-2">
          {todo.length ? (
            todo.map((list, i) => (
              <span
                key={list.listTitle + i}
                className={`h-[65px] rounded-md mt-4 flex items-center justify-between 
                  ${i === activeIndex ? "bg-[#ffc847] text-black" : ""}
                  transition-all cursor-pointer`}
                onClick={() => dispatch(setActiveIndex(i))}
              >
                <input
                  type="text"
                  value={tempTitles[i] ?? list.listTitle}
                  onChange={(e) => handleChange(i, e.target.value)}
                  onBlur={() => handleBlur(i)}
                  className={` w-[6vw] bg-transparent selection:bg-transparent selection:text-inherit pl-2 focus:outline-none 
                    ${activeIndex === i ? "cursor-text" : "cursor-pointer"}`}
                  maxLength={10}
                />

                {i === activeIndex && (
                  <button
                    className="pr-4 text-xl text-[#000000]"
                    onClick={() => dispatch(removeTodoList(i))}
                  >
                    <RxCross2 />
                  </button>
                )}
              </span>
            ))
          ) : (
            <h2>No List</h2>
          )}

          {/* Add Todo List Button */}
          <button
            className="flex gap-2 mt-6 ml-4 p-3 cursor-pointer"
            onClick={() => dispatch(addTodoList({ listTitle: "New List" }))}
          >
            <span>+</span>
            <h5>Todo</h5>
          </button>
        </div>
      </section>
    </main>
  );
};

export default LeftSection;
