export default function DateMonthReminder(): JSX.Element {
  const date = new Date();
  const hours = date.getHours();

  const getGreeting = (): string => {
    if (hours >= 6 && hours < 12) return "Good morning!";
    if (hours >= 12 && hours < 16) return "Good afternoon!";
    if (hours >= 16 && hours < 19) return "Good evening!";
    return "Good night!";
  };

  const getPlanMessage = (): string => {
    if (hours >= 21) return "Time to unwind. Got any plans for tomorrow?";
    if (hours >= 17) return "The day's winding down. How did it go?";
    if (hours >= 12)
      return "Still plenty of time left. What's next on your list?";
    return "A fresh day ahead! What’s your first move?";
  };

  return (
    <section className="w-full p-6 flex justify-center items-center *:p-2 text-4xl font-extrabold">
      <span className="text-center text-2xl">
        <h4>{date.toLocaleDateString("default", { month: "short" })}</h4>
        <h4>{date.getDate()}</h4>
      </span>
      <span className="text-3xl">
        <h4>{getGreeting()}</h4>
        <h4 className="text-gray-600">{getPlanMessage()}</h4>
      </span>
    </section>
  );
}
