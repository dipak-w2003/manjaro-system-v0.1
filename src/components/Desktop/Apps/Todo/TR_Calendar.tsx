import React, { useEffect, useState } from "react";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";

const TR_Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [startDay, setStartDay] = useState(0);
  const [daysInMonth, setDaysInMonth] = useState<number[]>([]);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const generateDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days = [];

    // Calculate the start day (which is the weekday of the first day of the month)
    setStartDay(firstDay.getDay());

    // Loop over the number of days in the month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(i); // Only push the day number
    }

    setDaysInMonth(days); // Set the days in state
  };

  useEffect(() => {
    generateDaysInMonth(currentDate);
  }, [currentDate]);

  const dayNames = ["S", "M", "T", "W", "T", "F", "S"];

  const prevMonth = () => {
    setCurrentDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1)
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1)
    );
  };

  const handleDateClick = (day: number) => {
    setSelectedDate(
      `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${day}`
    );
  };

  const isToday = (day: number): boolean => {
    const today = new Date();
    return (
      today.getDate() === day &&
      today.getMonth() === currentDate.getMonth() &&
      today.getFullYear() === currentDate.getFullYear()
    );
  };

  /*
  ? Calendar
  Todo : Collect daysInMonth as this format ["2025-03-10" ...] & map it
  Todo : IdentifyToday : currentDate === new Date().toISOString().split("T")[0] like this
  Todo : Grab DevTodoListItems Dates as "2025-03-10" format
  Todo : Grab common dates : array1.filter(item => array2.includes(item));
  Todo : conditional highlight Calendar Dates commonDates.includes(map.date) && highlightDate
  Todo : No Need to add selectedDate styling & functionality
   */
  return (
    <main className="calendar">
      {/* header */}
      <section className="header flex items-center gap-2 justify-center">
        <button onClick={prevMonth}>
          <AiOutlineLeftCircle className="text-xl" />
        </button>
        <span className="flex flex-col items-center text-xl min-w-28 max-w-28 p-2">
          <h4>
            {currentDate.toLocaleDateString("default", { month: "long" })}
          </h4>
          <h4>{currentDate.getFullYear()}</h4>
        </span>
        <button onClick={nextMonth}>
          <AiOutlineRightCircle className="text-xl" />
        </button>
      </section>

      {/* day names - Sunday to Saturday */}
      <section className="day-names flex justify-around p-1">
        {dayNames.map((day, index) => (
          <pre className="day-name text-center" key={index}>
            {day}
          </pre>
        ))}
      </section>

      {/* days */}
      <section className="days">
        {Array.from({ length: startDay }).map((_, index) => (
          <span
            key={`empty-${index}`}
            className="empty-day h-[35px] w-[35px]"
          />
        ))}
        {daysInMonth.map((day, index) => (
          <button
            key={day}
            className={`day h-[35px] w-[35px] opacity-80 rounded-[50%] flex justify-center items-center transition-all ease-linear duration-100 ${
              isToday(day) ? "bg-[#807867]" : ""
            }`}
            onClick={() => handleDateClick(day)}
          >
            {day}
          </button>
        ))}
      </section>
    </main>
  );
};

export default TR_Calendar;
