import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AddTodoListItems(): JSX.Element {
  const [focused, setFocused] = useState(false);
  const today = new Date().toISOString().split("T")[0];
  useEffect(() => {
    console.log("Focus state updated:", focused);
  }, [focused]);
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    // Extract form values manually
    const todoText = formData.get("add-todo") as string;
    const todoDate = formData.get("date-todo") as string;
    console.log({ todoText, todoDate });
    setFocused(false);
  }

  return (
    <section className="flex flex-col  items-center justify-between">
      <motion.form
        onSubmit={handleSubmit}
        onFocus={() => setFocused(true)}
        // onMouseOutCapture={() => setTimeout(() => setFocused(false), 1500)}
        initial={{ height: "70px" }}
        animate={{ height: focused ? "40vh" : "70px" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="rounded overflow-hidden flex flex-col transition-all bg-[#252525]"
      >
        <input
          required
          name="add-todo"
          placeholder="Add Todo"
          className="focus-within:outline-none max-h-[70px] min-h-[70px] p-3 pl-4 w-[45vw] bg-transparent"
          type="text"
          onFocus={() => setFocused(true)}
        />
        {focused && (
          <div className="transition-all duration-150 ease-linear flex flex-col  w-full *:mt-[20px]">
            <span className="p-3 flex justify-between   items-center h-[70px]">
              <label htmlFor="date-todo">Date</label>
              <input
                className="bg-transparent focus-within:outline-none"
                type="date"
                defaultValue={today}
                name="date-todo"
                id="date-todo"
              />
            </span>

            {/* Priority */}
            <section
              id="todo-list-items-priority"
              className=" p-3 flex justify-between   items-center h-[70px]"
            >
              <h2>Priority </h2>

              <div className="priors flex gap-2 ">
                {["high", "mid", "low"].map((priority, index) => {
                  return (
                    <span
                      key={priority}
                      className="p-3 flex justify-between items-center gap-1 "
                    >
                      <label htmlFor="date-todo">{priority}</label>
                      <input
                        className="bg-transparent rounded-full  focus-within:outline-none"
                        type="radio"
                        name="priority-todo"
                      />
                    </span>
                  );
                })}
              </div>
            </section>

            {/* Tag */}
            <span>
              <input
                required
                name="tag-todo"
                placeholder="Tag"
                className="focus-within:outline-none max-h-[70px] placeholder:text-gray-50 min-h-[70px] p-3 pl-4 w-[45vw] bg-transparent"
                type="text"
                onFocus={() => setFocused(true)}
              />
            </span>
          </div>
        )}
      </motion.form>
    </section>
  );
}
