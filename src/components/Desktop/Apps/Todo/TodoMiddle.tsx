import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
import DateMonthReminder from "./TM_DateMonthReminder";
import AddTodoListItems from "./TM_AddTodoListItems";
import TodoListItems from "./TM_TodoListItems";
import TM_TodoReminder from "./TM_TodoReminder";

interface TodoMiddleProp {
  styles?: string;
}

const TodoMiddle: React.FC<TodoMiddleProp> = ({ styles }) => {
  const Todos_ = useSelector((state: RootState) => state.devTodo);
  const [currentTime, setCurrentTime] = useState(new Date());

  const collectTodos = Todos_.todo[Todos_.activeIndex]?.items || [];

  // Keep updating time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Recompute reminders every time todos or time changes : Real Time Changes
  const todayReminders = useMemo(() => {
    return collectTodos.filter((e) => {
      const todoDate = new Date(e.date);
      const reminderHour =
        e.reminder?.isAmPm === "pm" && e.reminder.hour !== 12
          ? e.reminder.hour + 12
          : e.reminder?.isAmPm === "am" && e.reminder.hour === 12
          ? 0
          : e.reminder.hour;

      const reminderMinute = e.reminder.minute;

      const reminderTime = new Date(
        todoDate.getFullYear(),
        todoDate.getMonth(),
        todoDate.getDate(),
        reminderHour,
        reminderMinute
      );

      const diff = currentTime.getTime() - reminderTime.getTime();

      return (
        todoDate.getFullYear() === currentTime.getFullYear() &&
        todoDate.getMonth() === currentTime.getMonth() &&
        todoDate.getDate() === currentTime.getDate() &&
        diff >= 0 &&
        diff < 60000 // reminder is due within this current minute
      );
    });
  }, [collectTodos, currentTime]);

  const currentReminder = todayReminders.length > 0 ? todayReminders[0] : null;

  return (
    <main
      className={`${styles} flex flex-col bg-[#131313] items-center pb-9 relative`}
    >
      {/* Reminder section */}
      {currentReminder && (
        <TM_TodoReminder
          date={currentReminder.date}
          reminder={currentReminder.reminder}
          todoTitle={currentReminder.todoTitle}
          id={currentReminder.id}
          isCompleted={currentReminder.isCompleted}
          priority={currentReminder.priority}
          tag={currentReminder.tag}
        />
      )}

      <DateMonthReminder />

      {Todos_.todo.length > 0 ? (
        <>
          <AddTodoListItems />
          <TodoListItems />
        </>
      ) : (
        <h2 className="text-xl text-center my-0 w-full h-fit text-gray-500 mt-10">
          Create List
        </h2>
      )}

      {/* Optional debug clock */}
      {/* <pre className="absolute bottom-10 text-3xl">
        {currentTime.getHours()} :: {currentTime.getMinutes()} ::{" "}
        {currentTime.getSeconds()}
      </pre> */}
    </main>
  );
};

export default TodoMiddle;

/*
# Add real-time array updating example with useMemo hook and optimization
- Implemented useState and useMemo hooks to handle array filtering and sorting based on even/odd criteria
- Added buttons to toggle between even and odd numbers, and to add new items to the list
- Optimized re-rendering by memoizing the filtered and sorted array
- Included a detailed README with usage instructions and explanation of the code

*/