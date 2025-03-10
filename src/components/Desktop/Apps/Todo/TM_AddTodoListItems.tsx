import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";
import { AppDispatch, RootState } from "@/Redux/store";
import { useDispatch, useSelector } from "react-redux";
import { addTodoListItems } from "@/Redux/2-rendered-apps-state/devTodoSlice";
import { dataList } from "./todo_utils";

export default function AddTodoListItems(): JSX.Element {
  const { activeIndex } = useSelector((state: RootState) => state.devTodo);
  const todoTitleRef = useRef<HTMLInputElement>(null);
  const [focused, setFocused] = useState(false);
  const today = new Date().toISOString().split("T")[0];
  const dispatch: AppDispatch = useDispatch();
  let timeoutId: NodeJS.Timeout | null = null;

  const handleFocusChange = (isFocused: boolean, delay = 0) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => setFocused(isFocused), delay);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    const todoTitle = todoTitleRef.current?.value.trim();
    if (!todoTitle) return;

    const todoDate = (form.elements.namedItem("date-todo") as HTMLInputElement)
      ?.value;
    const todoTag = (form.elements.namedItem("tag-todo") as HTMLInputElement)
      ?.value;
    const todoPriority = (
      form.elements.namedItem("priority-todo") as HTMLInputElement
    )?.value;
    const todoSummarize = (
      form.elements.namedItem("todo-summarize") as HTMLTextAreaElement
    )?.value;

    dispatch(
      addTodoListItems({
        date: todoDate,
        id: uuidv4(),
        isCompleted: false,
        priority: todoPriority,
        tag: todoTag,
        todoTitle,
        todoSummarize,
      })
    );

    form.reset();
    setFocused(false);
  };

  return (
    <section className="flex flex-col items-center justify-between">
      <motion.form
        onSubmit={handleSubmit}
        onFocus={() => setFocused(true)}
        onMouseEnter={() => handleFocusChange(true, 200)}
        onMouseLeave={() => handleFocusChange(false, 1000)}
        initial={{ height: "70px" }}
        animate={{ height: focused ? "450px" : "70px" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="rounded overflow-hidden flex flex-col transition-all duration-100 bg-[#252525] relative"
      >
        {/* Todo Input */}
        <input
          required
          name="add-todo"
          placeholder={focused ? "Todo Title" : "Add Todo"}
          className="focus-within:outline-none max-h-[70px] min-h-[70px] p-3 pl-4 w-[45vw] bg-transparent"
          type="text"
          ref={todoTitleRef}
          autoComplete="off"
          maxLength={50}
          list="todo-suggestions"
        />
        {/* Suggestions :Postpone idea */}
        {/* <datalist id="todo-suggestions">
          {dataList.map((list) => (
            <option key={list.id} value={list.list} />
          ))}
        </datalist> */}

        {focused && (
          <div className="transition-all duration-150 ease-linear flex flex-col w-full *:mt-[20px]">
            <textarea
              className="w-full p-2 pl-4 min-h-[75px] max-h-[75px] focus:outline-none resize-none focus:ring-2 focus:ring-blue-400 bg-transparent font-light italic"
              maxLength={300}
              id="todo-summarize"
              name="todo-summarize"
              placeholder="Make Summarization.."
            />

            <span className="p-3 flex justify-between items-center h-[70px]">
              <label htmlFor="date-todo">Date</label>
              <input
                className="bg-transparent focus-within:outline-none"
                type="date"
                defaultValue={today}
                name="date-todo"
                id="date-todo"
              />
            </span>

            <section
              id="todo-list-items-priority"
              className="p-3 flex justify-between items-center h-[70px]"
            >
              <h2>Priority</h2>
              <div className="priors flex gap-2 ">
                {["high", "mid", "low"].map((priority) => (
                  <span
                    key={priority}
                    className="p-3 flex justify-center items-center gap-2"
                  >
                    <input
                      title={`priority-${priority}`}
                      id={`priority-${priority}`}
                      type="radio"
                      name="priority-todo"
                      value={priority}
                      defaultChecked={priority === "mid"}
                      required
                      className="w-4 h-4 text-gray-400 bg-gray-700 border-gray-400 focus:ring-2 focus:ring-gray-400 focus:outline-none rounded-full cursor-pointer"
                    />
                    <label htmlFor={`priority-${priority}`}>{priority}</label>
                  </span>
                ))}
              </div>
            </section>

            <span>
              <input
                required
                name="tag-todo"
                placeholder="#tag"
                className="focus-within:outline-none max-h-[70px] placeholder:text-gray-50 min-h-[70px] p-3 pl-4 w-[45vw] bg-transparent"
                type="text"
              />
            </span>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-md mt-4 self-center bottom-0 fixed"
            ></button>
          </div>
        )}
      </motion.form>
    </section>
  );
}
