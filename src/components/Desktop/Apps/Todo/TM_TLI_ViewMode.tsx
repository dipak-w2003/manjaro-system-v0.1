import { AppDispatch, RootState } from "@/Redux/store";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  MdOutlineRadioButtonChecked,
  MdOutlineRadioButtonUnchecked,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { ListItemEditableMode } from "./TM_TLI_EditableMode";
import { updateTodoListItemSetIsComplete } from "@/Redux/2-rendered-apps-state/devTodoSlice";

export default function TM_TodoListItemsViewMode() {
  const { activeIndex, todo } = useSelector(
    (state: RootState) => state.devTodo
  );
  const [focusedItem, setFocusedItem] = useState<string | null>(null);
  const activeItems = todo[activeIndex]?.items || [];

  const dateFormatter = (date: string): string => {
    const [YYYY, MM, DD] = date.split("-");
    return `${YYYY}/${MM}/${DD}`;
  };
  const dispatch: AppDispatch = useDispatch();

  // Todo :
  // 1. collect items on two basis isCompleted false : top else isCompleted true bottom
  // make two array notCompleted [{}] and completed [{}] merge those two and map
  // 2. Research priority based styling
  return (
    <main
      className="flex flex-col *:mt-4 items-center overflow-y-scroll scrollbar-hide scroll-smooth noto-sans "
      onMouseLeave={() => setFocusedItem((prev) => (prev = null))}
    >
      {activeItems.length > 0 ? (
        activeItems.map((item, idx) => {
          let isFocused = item.id === focusedItem;

          return (
            <motion.section
              onDrag={() => console.log(item)}
              initial={{ height: "70px" }}
              animate={{
                minHeight: isFocused ? "400px" : "70px",
                backgroundColor: isFocused ? "#333" : "#252525",
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              key={item.id}
              className={
                "bg-[#252525] max-h-[480px] min-h-[70px] p-3 pl-4 w-[45vw] rounded-sm transition-all flex  items-center justify-center relative"
              }
            >
              {/* setIsComplete */}
              {!isFocused &&
                (item.isCompleted ? (
                  <MdOutlineRadioButtonChecked
                    onClick={() =>
                      dispatch(
                        updateTodoListItemSetIsComplete({
                          completion: true,
                          uid: item.id,
                        })
                      )
                    }
                    title="Checked"
                    className="cursor-pointer"
                  />
                ) : (
                  <MdOutlineRadioButtonUnchecked
                    onClick={() =>
                      dispatch(
                        updateTodoListItemSetIsComplete({
                          completion: true,
                          uid: item.id,
                        })
                      )
                    }
                    title="Unchecked"
                    className="cursor-pointer"
                  />
                ))}
              {/* article */}

              {!isFocused && (
                <article
                  className="flex flex-col relative w-full gap-2 ml-3 *:transition-all duration-300"
                  onClick={(event) => {
                    event.preventDefault();
                    setFocusedItem((prev) =>
                      prev === item.id ? null : item.id
                    );
                  }}
                >
                  <pre className="text-xs">{dateFormatter(item.date)}</pre>
                  <h3>{item.todoTitle}</h3>
                  <pre className="absolute right-1 top-3">#{item.tag}</pre>
                </article>
              )}
              {isFocused && (
                <ListItemEditableMode
                  idx={idx}
                  setFocusedItem={() => setFocusedItem((prev) => (prev = null))}
                  TodoItems={item}
                />
              )}
            </motion.section>
          );
        })
      ) : (
        <p className="text-gray-400">No tasks available</p>
      )}
    </main>
  );
}
