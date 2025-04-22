import React, { useState } from "react";
import clover from "./clover.svg";
import {
  addTodoList,
  setActiveIndex,
  updateTodoListTitle,
  TodoState,
  removeTodoList,
} from "@/Redux/2-rendered-apps-state/devTodoSlice";
import { AppDispatch, RootState } from "@/Redux/store";
import { useDispatch, useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { toast, ToastContainer } from "react-toastify";

interface TodoPROPS {
  styles: string;
  todoList?: TodoState;
  // ? For removeListTitle
}

const TodoLeft: React.FC<TodoPROPS> = ({ styles, todoList }): JSX.Element => {
  const { todo = [], activeIndex } = todoList || {};
  const [tempListTitle, setTempListTitle] = useState<string>("");
  const dispatch: AppDispatch = useDispatch();
  const handleIndexFocus = async (idx: number) => {
    dispatch(setActiveIndex(idx));
  };

  // ? Form Handle Submission
  const handleSubmission = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (tempListTitle.length > 0) {
      toast.success(`Title Updated`, {
        position: "bottom-right",
        autoClose: 1000,
        pauseOnHover: true,
        draggable: true,
      });
      dispatch(
        updateTodoListTitle({ listIdx: activeIndex, newTitle: tempListTitle })
      );
      setTempListTitle("");
    } else
      toast.error(`Title Insufficient`, {
        position: "bottom-left",
        autoClose: 5000,
        pauseOnHover: true,
        draggable: true,
      });
  };

  // ? HTML'S
  return (
    <main className={`${styles} relative`}>
      <HeadingTodDev />
      {/* List Section */}
      <section className="my-lists-container p-2 mt-[90px] h-[80%] overflow-y-scroll scrollbar-hide scroll-smooth pb-8">
        <h4 className="text-xl absolute top-36 underline">My Lists</h4>
        {/* ? List Container */}
        <div className="lists flex flex-col justify-around p-2">
          {todo.length ? (
            todo.map((list, i) => (
              <span
                key={String(list.listTitle + i)}
                className={`h-[65px] rounded-md mt-4 flex items-center justify-between 
                  ${i === activeIndex ? "bg-[#F0C869] " : "text-gray-300"}
                  transition-all cursor-pointer`}
                onClick={() => handleIndexFocus(i)}
              >
                {/* ?form */}
                <React.Fragment>
                  <form
                    className="w-[6vw]  h-fit"
                    onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
                      handleSubmission(e)
                    }
                  >
                    {/* ? Show labels if it is not 'activeListIndex' */}
                    {i !== activeIndex && (
                      <ListTitleLabel
                        listTitle={list.listTitle}
                        activeLabelIdx={activeIndex}
                        idxLabel={i}
                      />
                    )}
                    {/* ? show editMode:input only if activeIndex & FocusTitle Matches*/}
                    {i === activeIndex && (
                      <input
                        onMouseLeave={() => setTempListTitle("")}
                        title={`Edit: ${list.listTitle} & Enter`}
                        placeholder={`Edit: ${list.listTitle}`}
                        value={tempListTitle}
                        type="text"
                        className={`w-[10vw] text-gray-950 placeholder:text-gray-900 
                          bg-transparent selection:bg-transparent   selection:text-inherit pl-2 focus:outline-none 
                        ${
                          activeIndex === i ? "cursor-text" : "cursor-pointer"
                        }`}
                        maxLength={10}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setTempListTitle((prev) => (prev = e.target.value))
                        }
                      />
                    )}
                  </form>
                </React.Fragment>

                {/* List Remove Button "X" */}
                {i === activeIndex && <RemoveListTitle idx={i} />}
              </span>
            ))
          ) : (
            <h2>No List</h2>
          )}
          {/* Add Todo List Title */}
          <AddListTitle />
        </div>
      </section>
      <ToastContainer />
    </main>
  );
};

export default TodoLeft;

/**
 * @Line129
 * @Optimization
 * Previous On-Time updating Title:input was found hard to integrate backend system with real time db's updating so for now it has been changed
 * @Process
 * * added form and wrapped label:list.listTitle & input:tempTitle-useState
 * * show labels if list:idx !== activeIdx
 * - Show input:tempTitle-useState-EditMode if listIdx === activeIdx
 * * On formSubmission : preventDefault() : `reloadIssue`
 * - During Submission if tempListTitle.length=== 0 don't dispatch:updateTodoListTitle
 *
 * @BugFixed
 * * tempState was showing on other input : like while you created a list5 and rename it without
 *    entering the state:tempListTitle was showing on other input:tempState
 *  * Solution : input:tempListTitle(event) => onMouseLeave(setTempTitle(""))
 */

// ? Separated Components : For better code-review
function HeadingTodDev() {
  return (
    <span className="text-4xl flex items-center justify-center mt-10 gap-5 cursor-pointer">
      <img src={clover} alt="Logo" />
      <h2>Dev Todo</h2>
    </span>
  );
}

function ListTitleLabel(prop: {
  activeLabelIdx: number;
  idxLabel: number;
  listTitle: string;
}) {
  return (
    <label
      title={prop.listTitle}
      className={`selection:bg-transparent  selection:text-inherit pl-2 focus:outline-none  ${
        prop.activeLabelIdx === prop.idxLabel ? "cursor-text" : "cursor-pointer"
      }`}
    >
      {prop.listTitle}
    </label>
  );
}

function AddListTitle() {
  const dispatch: AppDispatch = useDispatch();
  return (
    <button
      className="flex gap-2 mt-6 ml-4 p-3 cursor-pointer text-gray-500"
      onClick={() => dispatch(addTodoList())}
    >
      <span>+</span>
      <h5>Add Lists</h5>
    </button>
  );
}
function RemoveListTitle(prop: { idx: number }) {
  const dispatch: AppDispatch = useDispatch();
  return (
    <button
      className="pr-4 text-xl text-[#000000]"
      onClick={() => dispatch(removeTodoList(prop.idx))}
    >
      <RxCross2 />
    </button>
  );
}
