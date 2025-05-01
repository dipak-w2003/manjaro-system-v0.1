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
  const allReminders = Todos_.todo.flatMap((list) =>
    (list.items ?? []).filter((item) => item.reminder && !item.isCompleted)
  );
  const collectTodos = allReminders || [];
  // ⏱️ Keep updating time every second
  console.log(allReminders);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  /**
   * 🚨 Root Crash Cause:
   * When `e.reminder` is undefined (no reminder set on some todos),
   * accessing `e.reminder.hour` causes a crash.
   * ✅ Fix: Guard against undefined `reminder` before accessing `hour` or `minute`.
   */
  const todayReminders = useMemo(() => {
    return collectTodos.filter((e) => {
      // 🚫 Skip if reminder object is missing or malformed
      if (
        !e.reminder ||
        typeof e.reminder.hour !== "number" ||
        typeof e.reminder.minute !== "number"
      ) {
        return false;
      }

      const todoDate = new Date(e.date);

      // Convert AM/PM to 24-hour format safely
      const reminderHour =
        e.reminder.isAmPm === "pm" && e.reminder.hour !== 12
          ? e.reminder.hour + 12
          : e.reminder.isAmPm === "am" && e.reminder.hour === 12
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
        diff < 60000 // ✅ only show reminder due within current minute
      );
    });
  }, [collectTodos, currentTime]);

  // 🧠 Use short-circuit logic to assign the first matching reminder (or false)
  const currentReminder = todayReminders.length > 0 && todayReminders[0];

  return (
    <main
      className={`${styles} flex flex-col bg-[#131313] items-center pb-9 relative`}
    >
      {/* 🔔 Show reminder popup only if valid */}
      {currentReminder && currentReminder.reminder && (
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

      <DateMonthReminder reminderPanel={todayReminders.length > 0 && true} />

      {/* ✅ Main Todo Content */}
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

      {/* 🧪 Optional: Real-time debug clock */}
      {/* <pre className="absolute bottom-10 text-3xl">
        {currentTime.getHours()} :: {currentTime.getMinutes()} ::{" "}
        {currentTime.getSeconds()}
      </pre> */}
    </main>
  );
};

export default TodoMiddle;
