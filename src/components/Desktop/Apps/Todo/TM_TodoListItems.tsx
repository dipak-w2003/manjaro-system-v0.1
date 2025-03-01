// import { RootState } from "@/Redux/store";
// import { useSelector } from "react-redux";
import React from "react";
// import { motion } from "framer-motion";
import TM_TodoListItemsViewMode from "./TM_TLI_ViewMode";
export default function TodoListItems() {
  // const { activeIndex, todo } = useSelector(
  //   (state: RootState) => state.devTodo,
  // );
  // const [focusedItems, setFocusedItems] = useState<string[]>([]);

  // const activeItems = todo[activeIndex]?.items || [];

  // // handle
  // function handleSelections(idx: string) {
  //   setFocusedItems((prev) =>
  //     prev.includes(idx) ? prev.filter((id) => id !== idx) : [...prev, idx],
  //   );
  //   // se tItems check if idx already includes if so remove it by filtering else spread it with default
  // }

  return (
    <React.Fragment>
      <TM_TodoListItemsViewMode />
    </React.Fragment>
  );
}

// Todo : use TM_AddTodoListItems and use value from selected : TodoItems
