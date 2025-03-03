import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";
import { AppDispatch, RootState } from "@/Redux/store";
import { useDispatch, useSelector } from "react-redux";
import { addTodoListItems } from "@/Redux/2-rendered-apps-state/devTodoSlice";
import { dataList } from "./todo_utils";

export default function AddTodoListItems(): JSX.Element {
  const { todo, activeIndex } = useSelector(
    (state: RootState) => state.devTodo
  );
  const [todo_title, setTodo_title] = useState<string>("");
  const [focused, setFocused] = useState(false);
  const today = new Date().toISOString().split("T")[0];
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    console.log("Focus state updated:", focused);
  }, [focused]);
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    // Extract form values
    const todoTitle = formData.get("add-todo") as string;
    const todoDate = formData.get("date-todo") as string;
    const todoTag = formData.get("tag-todo") as string;
    const todoPriority = formData.get("priority-todo") as string;
    const todoSummarize = formData.get("todo-summarize") as string;

    console.log({ todoTitle, todoDate, todoTag, todoPriority, todoSummarize });

    setFocused(false);

    // dispatch
    dispatch(
      addTodoListItems({
        date: todoDate,
        id: uuidv4(),
        isCompleted: false,
        priority: todoPriority,
        tag: todoTag,
        todoTitle: todo_title,
        todoSummarize: todoSummarize,
      })
    );

    setTodo_title("");
  }

  useEffect(() => {
    setFocused(false);
  }, [activeIndex]);
  return (
    <section className="flex flex-col items-center justify-between">
      <motion.form
        onSubmit={handleSubmit}
        onFocus={() => setFocused(true)}
        onMouseEnter={() => setTimeout(() => setFocused(true), 100)}
        onMouseLeave={() => setTimeout(() => setFocused(false), 500)}
        initial={{ height: "70px" }}
        animate={{ height: focused ? "450px" : "70px" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="rounded overflow-hidden flex flex-col transition-all bg-[#252525] relative"
      >
        {/* Todo Input */}
        <input
          required
          name="add-todo"
          placeholder="Add Todo"
          className="focus-within:outline-none max-h-[70px] min-h-[70px] p-3 pl-4 w-[45vw] bg-transparent"
          type="text"
          value={todo_title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTodo_title(e.target.value)
          }
          onFocus={() => setFocused(true)}
          autoComplete="off"
          maxLength={50}
          list="todo-suggestions"
        />
        {/* Todo : Make suggestions optimized for better performance */}
        <datalist id="todo-suggestions">
          {dataList
            .filter((list) => list.list.toLowerCase())
            .map((list) => (
              <option key={list.id} value={list.list} />
            ))}
        </datalist>

        {focused && (
          <div className="transition-all duration-150 ease-linear flex flex-col w-full *:mt-[20px]">
            <textarea
              className="w-full p-2 pl-4
              min-h-[75px] max-h-[75px] focus:outline-none resize-none focus:ring-2 focus:ring-blue-400 bg-transparent font-light
              scroll-none italic"
              // standard task description char length
              maxLength={300}
              id="todo-summarize"
              name="todo-summarize"
              placeholder="Make Summarization.."
            />
            {/* Date Picker */}
            <span className="p-3 flex justify-between items-center h-[70px]">
              <label htmlFor="date-todo">Date</label>
              <input
                className="bg-transparent focus-within:outline-none  "
                type="date"
                defaultValue={today}
                name="date-todo"
                id="date-todo"
              />
            </span>

            {/* Priority Selection */}
            <section
              id="todo-list-items-priority"
              className="p-3 flex justify-between items-center h-[70px]"
            >
              <h2>Priority</h2>
              <div className="priors flex gap-2">
                {["high", "mid", "low"].map((priority) => (
                  <span
                    key={priority}
                    className="p-3 flex justify-between items-center gap-2"
                  >
                    <input
                      autoComplete="off"
                      id={`priority-${priority}`}
                      type="radio"
                      name="priority-todo"
                      value={priority}
                      required
                      className="w-4 h-4 text-gray-400 bg-gray-700 border-gray-400 focus:ring-2 focus:ring-gray-400 focus:outline-none rounded-full cursor-pointer"
                    />
                    <label htmlFor={`priority-${priority}`}>{priority}</label>
                  </span>
                ))}
              </div>
            </section>

            {/* Tag Input */}
            <span>
              <input
                required
                name="tag-todo"
                placeholder="#tag"
                className="focus-within:outline-none max-h-[70px] placeholder:text-gray-50 min-h-[70px] p-3 pl-4 w-[45vw] bg-transparent"
                type="text"
                onFocus={() => setFocused(true)}
              />
            </span>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white  rounded-md mt-4 self-center bottom-0 absolute"
            ></button>
          </div>
        )}
      </motion.form>
    </section>
  );
}
