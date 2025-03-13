import { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/Redux/store";
import {
  updateTodoListItems,
  removeTodoListItems,
  TodoItems,
} from "@/Redux/2-rendered-apps-state/devTodoSlice";
import { FaTrashCan } from "react-icons/fa6";

interface ListItemEditableModeProps {
  TodoItems: TodoItems;
  idx: number;
  setFocusedItem: (focusedItem: boolean | null) => void;
}

export const ListItemEditableMode: React.FC<ListItemEditableModeProps> = ({
  TodoItems,
  idx,
  setFocusedItem,
}) => {
  const [formDataProp, setFormDataProp] = useState<TodoItems>({ ...TodoItems });
  const dispatch: AppDispatch = useDispatch();

  const handleUpdateSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      !formDataProp.todoTitle ||
      !formDataProp.date ||
      !formDataProp.priority
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    setFocusedItem(false);
    dispatch(
      updateTodoListItems({
        idx,
        item: { ...formDataProp, isCompleted: false },
      })
    );
  };

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormDataProp((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <motion.form
      onSubmit={handleUpdateSubmit}
      initial={{ height: "70px" }}
      animate={{ height: "400px" }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="rounded overflow-hidden flex flex-col   p-0 transition-all duration-100  bg-[#252525] relative w-[45vw] bg-transparent "
    >
      <input
        required
        title="Todo-Title"
        name="todoTitle"
        placeholder="Todo Title"
        className="focus-within:outline-none max-h-[70px] min-h-[70px] p-3 -mt-4 pl-4 w-[45vw] bg-transparent"
        type="text"
        value={formDataProp.todoTitle}
        onChange={handleOnChange}
        autoComplete="off"
        maxLength={50}
        list="todo-suggestions"
      />

      {/* For now drop suggestions mapping */}
      {/* <datalist id="todo-suggestions">
        {dataList
          .filter(
            (list) =>
              typeof list.list === "string" &&
              list.list
                .toLowerCase()
                .includes(formDataProp.todoTitle.toLowerCase())
          )
          .map((list) => (
            <option key={list.id} value={String(list.list)} />
          ))}
      </datalist> */}

      <textarea
        title="Todo-Summary"
        className="w-full p-2 pl-4 min-h-[105px] max-h-[105px] focus:outline-none resize-none  bg-transparent scroll-none font-light"
        maxLength={300}
        name="todoSummarize"
        onChange={handleOnChange}
        value={formDataProp.todoSummarize}
        placeholder="Make Summarization.."
      />

      <span
        className="p-3  flex justify-between items-center h-[70px] transition-all duration-100"
        title="Todo-Date"
      >
        <label htmlFor="date-todo">Date</label>
        <input
          className="bg-transparent focus-within:outline-none"
          type="date"
          value={new Date(formDataProp.date).toISOString().split("T")[0]}
          onChange={handleOnChange}
          name="date"
          required
        />
      </span>

      <section
        title="Todo-Priority"
        id="todo-list-items-priority"
        className="p-3 flex justify-between items-center h-[70px] transition-all duration-100"
      >
        <h2>Priority</h2>
        <div className="priors flex gap-2">
          {["high", "mid", "low"].map((priority) => (
            <span
              key={priority}
              title={`Todo-Priority-${priority.toWellFormed()}`}
              className="p-3 flex justify-between items-center gap-2"
            >
              <input
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

      <span className="transition-all duration-100">
        <input
          title="Todo-Tag"
          required
          name="tag"
          placeholder="#tag"
          className="focus-within:outline-none max-h-[70px] placeholder:text-gray-50 min-h-[70px] p-3 pl-4 w-[45vw] bg-transparent"
          type="text"
          value={formDataProp.tag}
          onChange={handleOnChange}
        />
      </span>

      <span className="top-2 absolute flex right-5 transition-all">
        <button
          onClick={() => dispatch(removeTodoListItems(idx))}
          title="Delete-Item"
          type="button"
          className="bg-transparent text-white rounded-md self-center"
        >
          <FaTrashCan />
        </button>
      </span>
      <button type="submit" className="absolute "></button>
    </motion.form>
  );
};
