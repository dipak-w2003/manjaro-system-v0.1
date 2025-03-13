import { useState, useMemo } from "react";
import "./TR_Calendar.css";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/store";

const TR_Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Memoized values to prevent unnecessary recalculations
  const { daysInMonth, startDay } = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0); // Last day of the month

    // Get the start day (Sunday-Saturday) and the array of days in the month
    const startDay = firstDay.getDay();
    const daysInMonth: Date[] = [];

    for (let date = 1; date <= lastDay.getDate(); date++) {
      daysInMonth.push(new Date(year, month, date));
    }

    return { daysInMonth, startDay };
  }, [currentDate]);

  const dayNames = ["S", "M", "T", "W", "T", "F", "S"];

  // Navigation functions to change months
  const changeMonth = (increment: number) => {
    setCurrentDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + increment, 1)
    );
  };

  // Check if the day is today
  const isToday = (day: Date): boolean => {
    const today = new Date();
    return (
      day.getDate() === today.getDate() &&
      day.getMonth() === today.getMonth() &&
      day.getFullYear() === today.getFullYear()
    );
  };

  const DevTodo = useSelector((state: RootState) => state.devTodo);
  const TODO_ACTIVE_DATES = useMemo(
    () => DevTodo.todo[DevTodo.activeIndex]?.items || [],
    [DevTodo.todo, DevTodo.activeIndex]
  );
  const activeDates = useMemo(
    () =>
      TODO_ACTIVE_DATES.map((item) =>
        new Date(item.date).toLocaleString("default", { dateStyle: "long" })
      ),
    [TODO_ACTIVE_DATES]
  );
  // Todo : 4 times rendering activeDates
  // console.log(activeDates);

  return (
    <main className="calendar">
      <section className="header flex items-center gap-2 justify-center">
        <button onClick={() => changeMonth(-1)}>
          <AiOutlineLeftCircle className="text-xl" />
        </button>
        <span className="flex flex-col items-center text-xl min-w-28 max-w-28 p-2">
          <h4>
            {currentDate.toLocaleDateString("default", { month: "long" })}
          </h4>
          <h4>{currentDate.getFullYear()}</h4>
        </span>
        <button onClick={() => changeMonth(1)}>
          <AiOutlineRightCircle className="text-xl" />
        </button>
      </section>

      <section className="day-names flex justify-around p-1">
        {dayNames.map((day, index) => (
          <pre className="day-name text-center" key={index}>
            {day}
          </pre>
        ))}
      </section>

      <section className="days">
        {Array.from({ length: startDay }).map((_, index) => (
          <span
            key={`empty-${index}`}
            className="empty-day h-[35px] w-[35px]"
          />
        ))}
        {daysInMonth.map((day, _) => (
          <button
            className={`day h-[35px] w-[35px] opacity-80 rounded-[50%] flex justify-center items-center transition-all ease-linear duration-100
            ${
              activeDates.includes(
                day.toLocaleString("default", { dateStyle: "long" })
              ) && "bg-gray-500"
            }  
            ${isToday(day) ? "bg-[#ffca4e] text-black" : ""}
            `}
          >
            {day.getDate()}
          </button>
        ))}
      </section>
    </main>
  );
};

export default TR_Calendar;
