import React, { useEffect, useState } from "react";
import {
  TodoItems,
  updateTodoListItemSetIsComplete,
  updateTodoListItemSetIsComplete2,
} from "@/Redux/2-rendered-apps-state/devTodoSlice";
import { AppDispatch } from "@/Redux/store";
import { useDispatch } from "react-redux";
const TM_TodoReminder: React.FC<TodoItems> = ({
  todoTitle,
  reminder,
  tag,
  date,
  id,
  isCompleted,
  priority,
  parentListIndex,
}) => {
  const dispatch: AppDispatch = useDispatch();
  const [visible, setVisible] = useState(true);

  // Format time
  const hour = String(reminder.hour).padStart(2, "0");
  const minute = String(reminder.minute).padStart(2, "0");
  const ampm =
    reminder.isAmPm[0].toUpperCase() + reminder.isAmPm.slice(1).toLowerCase();

  // Optional auto-dismiss after 10 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
    }, 60000); // 10 seconds

    return () => clearTimeout(timeout);
  }, []);

  if (!visible && !isCompleted) return null;

  return (
    <div
      className="absolute top-6  h-[100px] bg-gray-800 rounded-md mx-auto flex items-center justify-between px-4 text-white shadow-lg"
      style={{ width: "90%" }}
    >
      {/* Left section */}
      <section className="flex flex-col items-start">
        <i className="text-sm text-gray-400">{new Date(date).toDateString()}</i>
        <span className="flex gap-4 text-lg font-medium">
          <b>{todoTitle}</b>
          <pre className="text-sm px-2 py-1 bg-gray-600 rounded">{tag}</pre>
        </span>
      </section>

      {/* Middle section */}
      <section className="text-2xl font-bold">
        {hour}:{minute} {ampm}
      </section>

      {/* Right section */}
      <section className="flex flex-col gap-3">
        <button
          onClick={() => {
            setVisible(false);

            dispatch(
              updateTodoListItemSetIsComplete2({
                parentListIndex: parentListIndex,
                uid: id,
                completion: isCompleted,
              })
            );
          }}
          className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded-md transition"
        >
          Done
        </button>
        <button
          onClick={() => setVisible(false)}
          className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded-md transition"
        >
          Stop
        </button>
      </section>
    </div>
  );
};

export default TM_TodoReminder;
