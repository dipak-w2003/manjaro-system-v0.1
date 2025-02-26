export default function DateMonthReminder(): JSX.Element {
  const date = new Date();
  const hours = date.getHours();

  const getGreeting = () => {
    if (hours >= 6 && hours < 12) return "Good Morning!";
    if (hours >= 12 && hours < 16) return "Good Afternoon!";
    if (hours >= 16 && hours < 19) return "Good Evening!";
    return "Good Night!";
  };
  return (
    <section className="w-full p-6 flex justify-center items-center *:p-2 text-4xl font-extrabold">
      <span className="text-center text-2xl">
        <h4>{date.toLocaleDateString("default", { month: "short" })}</h4>
        <h4>{date.getDate()}</h4>
      </span>
      <span className="text-4xl">
        <h4>{getGreeting()}</h4>
        <h4 className="text-gray-600">
          {hours > 20
            ? "What's your plan for tomorrow?"
            : "What's your plan for today?"}
        </h4>
      </span>
    </section>
  );
}
