import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
import DateMonthReminder from "./TM_DateMonthReminder";
import AddTodoListItems from "./TM_AddTodoListItems";
import TodoListItems from "./TM_TodoListItems";
import TM_TodoReminder from "./TM_TodoReminder";

interface TodoMiddleProps {
  styles?: string;
}

const TodoMiddle: React.FC<TodoMiddleProps> = ({ styles }) => {
  const { todo } = useSelector((state: RootState) => state.devTodo);
  const [currentTime, setCurrentTime] = useState(new Date());

  // ⏱️ Live clock ticking every second
  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  // 📦 Get all items with valid reminders that aren't completed
  const remindersPool = useMemo(() => {
    return todo.flatMap((list, listIndex) =>
      (list.items ?? [])
        .filter((item) => item.reminder && !item.isCompleted)
        .map((item) => ({ ...item, listIndex }))
    );
  }, [todo]);

  // 🎯 Filter today's active reminders that match the current minute
  const todayReminders = useMemo(() => {
    return remindersPool.filter((item) => {
      const { reminder, date } = item;
      if (
        !reminder ||
        typeof reminder.hour !== "number" ||
        typeof reminder.minute !== "number"
      ) {
        return false;
      }

      const todoDate = new Date(date);
      const reminderHour =
        reminder.isAmPm === "pm" && reminder.hour !== 12
          ? reminder.hour + 12
          : reminder.isAmPm === "am" && reminder.hour === 12
          ? 0
          : reminder.hour;

      const reminderTime = new Date(
        todoDate.getFullYear(),
        todoDate.getMonth(),
        todoDate.getDate(),
        reminderHour,
        reminder.minute
      );

      const isToday =
        todoDate.getFullYear() === currentTime.getFullYear() &&
        todoDate.getMonth() === currentTime.getMonth() &&
        todoDate.getDate() === currentTime.getDate();

      const diff = currentTime.getTime() - reminderTime.getTime();
      return isToday && diff >= 0 && diff < 60000; // within current minute
    });
  }, [remindersPool, currentTime]);

  const currentReminder = todayReminders[0];

  return (
    <main
      className={`${styles} flex flex-col bg-[#131313] items-center pb-9 relative`}
    >
      {/* 🔔 Reminder Popup */}
      {currentReminder && (
        <TM_TodoReminder
          parentListIndex={currentReminder.listIndex}
          date={currentReminder.date}
          reminder={currentReminder.reminder}
          todoTitle={currentReminder.todoTitle}
          id={currentReminder.id}
          isCompleted={currentReminder.isCompleted}
          priority={currentReminder.priority}
          tag={currentReminder.tag}
        />
      )}

      {/* 📆 Calendar strip */}
      <DateMonthReminder reminderPanel={!!todayReminders.length} />

      {/* 📝 Main Content */}
      {todo.length > 0 ? (
        <>
          <AddTodoListItems />
          <TodoListItems />
        </>
      ) : (
        <h2 className="text-xl text-center w-full mt-10 text-gray-500">
          Create List
        </h2>
      )}

      {/* 🧪 Optional Clock Debug */}
      {/* <pre className="absolute bottom-10 text-3xl">
        {currentTime.toLocaleTimeString()}
      </pre> */}
    </main>
  );
};

export default TodoMiddle;
