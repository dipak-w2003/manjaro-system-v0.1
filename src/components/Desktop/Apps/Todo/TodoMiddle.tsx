import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Todo, TodoItems } from "@/Redux/2-rendered-apps-state/devTodoSlice";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
interface TodoMiddleProp {
  styles?: string;
  todoListIndex?: number;
}

const TodoMiddle: React.FC<TodoMiddleProp> = ({ styles, todoListIndex }) => {
  const Todo_Items = useSelector((state: RootState) => state.devTodo.todo);
  console.log(Todo_Items[todoListIndex]);

  return (
    <main className={`${styles} flex flex-col bg-[#131313] pb-9 `}>
      <DateMonthReminder />
      <AddTodoListItems />
      {/* Todo List Items */}
      <section
        id="todo-list-items"
        className=" h-[80vh] flex flex-col  items-center  *:mt-4  overflow-y-scroll scrollbar-none"
      >
        {Todo_Items.length < 0 ? (
          <div>Empty Items</div>
        ) : (
          Array.from({ length: 10 }).map((item, _) => {
            return (
              <div
                key={_ + 10}
                className="bg-[#252525] min-h-[70px] p-3 pl-4 w-[45vw] rounded-sm"
              >
                <h2>{_ + 1}</h2>
                <button
                  className={`$ w-[15px] min-h-[15px] border-gray-50 border-2 rounded-full`}
                />
              </div>
            );
          })
        )}
      </section>
    </main>
  );
};

function DateMonthReminder(): JSX.Element {
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

// Add TodoList Items
function AddTodoListItems(): JSX.Element {
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
  }

  return (
    <section className="flex flex-col  items-center justify-between">
      <motion.form
        onSubmit={handleSubmit}
        onFocus={() => setFocused(true)}
        onMouseOutCapture={() => setTimeout(() => setFocused(false), 1500)}
        initial={{ height: "70px" }}
        animate={{ height: focused ? "40vh" : "70px" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="rounded overflow-hidden flex flex-col  bg-[#252525]"
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

// TodoList Items

export default TodoMiddle;
