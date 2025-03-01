import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/Redux/store";
import {
  TodoItems,
  updateTodoListItem,
} from "@/Redux/2-rendered-apps-state/devTodoSlice";
import { dataList } from "./todo_utils";

interface ListItemEditableModeProps {
  TodoItems: TodoItems;
  idx: number;
}
export const ListItemEditableMode: React.FC<ListItemEditableModeProps> = ({
  TodoItems,
  idx,
}): JSX.Element => {
  const [formDataProp, setFormDataProp] = useState<TodoItems>({
    todoTitle: TodoItems.todoTitle,
    date: TodoItems.date,
    tag: TodoItems.tag,
    priority: TodoItems.priority,
    isCompleted: TodoItems.isCompleted,
    id: TodoItems.id,
    todoSummarize: TodoItems.todoSummarize,
  });

  const [focusedOut, setFocusedOut] = useState<boolean>(false);
  const dispatch: AppDispatch = useDispatch();

  function handleUpdateSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("Final Form Data:", formDataProp);

    setFocusedOut((prev) => (prev = true));
    if (
      !formDataProp.todoTitle ||
      !formDataProp.date ||
      !formDataProp.priority
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    const updateTLItem = {
      ...formDataProp,
      isCompleted: false,
    };

    dispatch(updateTodoListItem({ idx: idx, item: updateTLItem }));

    // clear state
    setFormDataProp({
      todoTitle: "",
      date: "",
      tag: "",
      priority: "",
      isCompleted: false,
      id: "",
      todoSummarize: "",
    });
  }

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    console.log("Updating:", name, value);

    setFormDataProp((prev) => ({
      ...prev,
      [name]: type === "radio" ? value : value,
    }));
  };

  useEffect(() => {
    console.log("idx Updated : ", idx);

    // console.log("Updated formDataProp:", formDataProp);
  }, [formDataProp, idx]);

  return (
    <motion.form
      onSubmit={handleUpdateSubmit}
      initial={{ height: "70px" }}
      animate={{ height: !focusedOut && "400px" }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="rounded overflow-hidden flex flex-col transition-all p-0 bg-[#252525] relative w-[45vw] bg-transparent"
    >
      <input
        required
        name="todoTitle"
        placeholder="Add Todo"
        className="focus-within:outline-none max-h-[70px] min-h-[70px] p-3 pl-4 w-[45vw] bg-transparent"
        type="text"
        value={formDataProp.todoTitle}
        onChange={handleOnChange}
        autoComplete="off"
        maxLength={50}
        list="todo-suggestions"
      />

      <datalist id="todo-suggestions">
        {dataList
          .filter((list) =>
            list.list
              .toLowerCase()
              .includes(formDataProp.todoTitle.toLocaleString())
          )
          .slice(0, 10)
          .map((list) => (
            <option key={list.id} value={list.list} />
          ))}
      </datalist>

      <textarea
        className="w-full p-2 pl-4 min-h-[75px] max-h-[75px] focus:outline-none resize-none focus:ring-2 focus:ring-blue-400 bg-transparent scroll-none font-light"
        maxLength={300}
        name="todoSummarize"
        onChange={handleOnChange}
        value={formDataProp?.todoSummarize}
        placeholder="Make Summarization.."
      />

      <span className="p-3 flex justify-between items-center h-[70px]">
        <label htmlFor="date-todo">Date</label>
        <input
          className="bg-transparent focus-within:outline-none"
          type="date"
          value={formDataProp.date}
          onChange={handleOnChange}
          name="date"
          required
        />
      </span>

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
                name="priority"
                value={priority}
                checked={formDataProp.priority === priority}
                onChange={handleOnChange}
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
          name="tag"
          placeholder="#tag"
          className="focus-within:outline-none max-h-[70px] placeholder:text-gray-50 min-h-[70px] p-3 pl-4 w-[45vw] bg-transparent"
          type="text"
          value={formDataProp.tag}
          onChange={handleOnChange}
        />
      </span>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-md bg-transparent  self-center bottom-0 absolute"
      ></button>
    </motion.form>
  );
};
