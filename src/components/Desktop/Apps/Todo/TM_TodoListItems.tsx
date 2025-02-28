import { RootState } from "@/Redux/store";
import { useSelector } from "react-redux";
import {
  MdOutlineRadioButtonChecked,
  MdOutlineRadioButtonUnchecked,
} from "react-icons/md";
import { useState } from "react";
import { motion } from "framer-motion";
export default function TodoListItems() {
  const { activeIndex, todo } = useSelector(
    (state: RootState) => state.devTodo
  );
  const [focusedItems, setFocusedItems] = useState<string[]>([]);

  const activeItems = todo[activeIndex]?.items || [];

  const dateFormatter = (date: string): string => {
    const [YYYY, MM, DD] = date.split("-");
    return `${YYYY}/${MM}/${DD}`;
  };

  // handle
  function handleSelections(idx: string) {
    setFocusedItems((prev) =>
      prev.includes(idx) ? prev.filter((id) => id !== idx) : [...prev, idx]
    );
    // setItems check if idx already includes if so remove it by filtering else spread it with default
  }

  return (
    <main className="flex flex-col *:mt-4 items-center overflow-y-scroll scrollbar-hide scroll-smooth noto-sans">
      {activeItems.length > 0 ? (
        activeItems.map((item) => (
          <motion.section
            initial={{ height: "70px" }}
            animate={{
              height: focusedItems.includes(item.id) ? "50vh" : "70px",
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            key={`${item.todoTitle}-${item.tag}`}
            className="bg-[#252525] min-h-[70px] p-3 pl-4 w-[45vw] rounded-sm transition-all flex justify-start items-center"
          >
            {focusedItems.includes(item.id) ? (
              <MdOutlineRadioButtonChecked
                onClick={() => handleSelections(item.id)}
                title="Checked"
                className="cursor-pointer"
              />
            ) : (
              <MdOutlineRadioButtonUnchecked
                onClick={() => handleSelections(item.id)}
                title="Unchecked"
                className="cursor-pointer"
              />
            )}
            <article className="flex flex-col relative w-full gap-2 ml-3">
              <pre className="text-xs">{dateFormatter(item.date)}</pre>
              <h3>{item.todoTitle}</h3>
              <pre className="absolute right-1 top-3">#{item.tag}</pre>
            </article>
          </motion.section>
        ))
      ) : (
        <p className="text-gray-400">No tasks available</p>
      )}
    </main>
  );
}

// Todo : use TM_AddTodoListItems and use value from selected : TodoItems
function listItemsEditableMode() {}
