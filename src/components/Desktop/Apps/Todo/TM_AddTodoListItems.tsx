import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";
import { AppDispatch, RootState } from "@/Redux/store";
import { useDispatch, useSelector } from "react-redux";
import { addTodoListItems } from "@/Redux/2-rendered-apps-state/devTodoSlice";
// import { dataList } from "./todo_utils";

// Icons
import { MdOutlineTimer } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

export default function AddTodoListItems(): JSX.Element {
  const { activeIndex } = useSelector((state: RootState) => state.devTodo);
  const todoTitleRef = useRef<HTMLInputElement>(null);
  const [focused, setFocused] = useState(false);
  const [toggleReminerPanel, setToggleReminerPanel] = useState<boolean>(false);
  const [timeInput, setTimeInput] = useState<string>("10:00");
  const dispatch: AppDispatch = useDispatch();

  const today = new Date().toISOString().split("T")[0];
  let timeoutId: NodeJS.Timeout | null = null;

  /** @handleFocus Reveal */
  const handleFocusChange = (isFocused: boolean, delay = 0) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => setFocused(isFocused), delay);
  };

  /** @handleSubmission */
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const todoTitle = todoTitleRef.current?.value.trim();
    if (!todoTitle) return;
    const todoDate = (form.elements.namedItem("date-todo") as HTMLInputElement)
      ?.value;
    const todoTag = (form.elements.namedItem("tag-todo") as HTMLInputElement)
      ?.value;
    const todoPriority = (
      form.elements.namedItem("priority-todo") as HTMLInputElement
    )?.value;
    const todoSummarize = (
      form.elements.namedItem("todo-summarize") as HTMLTextAreaElement
    )?.value;

    // ? date converting and formatting
    const [GotY, GotM, GotD] = todoDate.split("-");
    const DATE_NEW = new Date();
    // ? Month -1 (for accurate month)
    const FinalDate: Date = new Date(
      +GotY,
      +GotM - 1,
      +GotD,
      DATE_NEW.getHours(),
      DATE_NEW.getMinutes(),
      DATE_NEW.getSeconds(),
      DATE_NEW.getMilliseconds()
    );
    // convert to new Date()
    // console.log(typeof new Date(FinalDate));
    // ! As per Calendar formatting requirement we collect form Date as yyyy-mm-dd format as convert it to new Date() format & where
    // slice supports string we convert it to the String(FinalDate)

    // Time Reminder Formatting
    let [timeHH, timeMM] = timeInput.split(":").map(Number);
    const isAmOrPM: string = timeHH >= 12 ? "pm" : "am";
    /**
     * This now correctly classifies:
      00:00 to 11:59 → "am"
      12:00 to 23:59 → "pm"
       */
    if (timeHH >= 13) timeHH = timeHH - 12;
    // ? Dispatch To redux
    dispatch(
      addTodoListItems({
        parentListIndex: activeIndex,
        date: String(FinalDate),
        id: uuidv4(),
        isCompleted: false,
        priority: todoPriority,
        tag: todoTag,
        todoTitle,
        todoSummarize,
        // Additionals
        reminder: {
          hour: timeHH,
          isAmPm: isAmOrPM,
          minute: timeMM,
        },
      })
    );

    setToggleReminerPanel(false);
    form.reset();
    setFocused(false);
    setTimeInput("10:00");
  };

  return (
    <section className="flex flex-col items-center justify-between">
      <motion.form
        onSubmit={handleSubmit}
        onFocus={() => setFocused(true)}
        onMouseEnter={() => handleFocusChange(true, 200)}
        onMouseLeave={() => handleFocusChange(false, 2000)}
        initial={{ height: "70px" }}
        animate={{ height: focused ? "450px" : "70px" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="rounded overflow-hidden flex flex-col transition-all duration-100 bg-[#252525] relative"
      >
        {/* Todo Input */}
        <input
          required
          name="add-todo"
          placeholder={focused ? "Todo Title" : "Add Todo"}
          className="focus-within:outline-none max-h-[70px] min-h-[70px] p-3 pl-4 w-[45vw] bg-transparent"
          type="text"
          ref={todoTitleRef}
          autoComplete="off"
          maxLength={50}
          list="todo-suggestions"
        />
        {/**  @Suggestions :Postpone idea */}
        {/* <datalist id="todo-suggestions">
          {dataList.map((list) => (
            <option key={list.id} value={list.list} />
          ))}
        </datalist> */}

        {/** @Focused  */}
        {focused && (
          <div className="transition-all duration-150 ease-linear flex flex-col w-full *:mt-[20px]">
            <textarea
              className="w-full p-2 pl-4 min-h-[75px] max-h-[75px]  focus:outline-none resize-none  bg-transparent font-light italic "
              maxLength={300}
              id="todo-summarize"
              name="todo-summarize"
              placeholder="Make Summarization.."
            />
            <span className="p-3 flex justify-between items-center h-[70px]">
              <label htmlFor="date-todo">Date</label>
              <input
                className="bg-transparent focus-within:outline-none"
                type="date"
                defaultValue={today}
                name="date-todo"
                id="date-todo"
              />
            </span>
            <section
              id="todo-list-items-priority"
              className="p-3 flex justify-between items-center h-[70px]"
            >
              {/** @priorities  */}
              <h2>Priority</h2>
              <div className="priors flex gap-2 ">
                {["high", "mid", "low"].map((priority) => (
                  <span
                    key={priority}
                    className="p-3 flex justify-center items-center gap-2"
                  >
                    <input
                      title={`priority-${priority}`}
                      id={`priority-${priority}`}
                      type="radio"
                      name="priority-todo"
                      value={priority}
                      defaultChecked={priority === "mid"}
                      required
                      className="w-4 h-4 text-gray-400 bg-gray-700 border-gray-400 focus:ring-2 focus:ring-gray-400 focus:outline-none rounded-full cursor-pointer"
                    />
                    <label htmlFor={`priority-${priority}`}>{priority}</label>
                  </span>
                ))}
              </div>
            </section>
            <span>
              <input
                required
                name="tag-todo"
                placeholder="#tag"
                className="focus-within:outline-none max-h-[70px] placeholder:text-gray-50 min-h-[70px] p-3 pl-4 w-[45vw] bg-transparent"
                type="text"
                autoComplete="off"
                autoCorrect="off"
              />
            </span>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-md mt-4 self-center  fixed"
            />
            {/* ? Timer */}
            <motion.button
              type="button"
              onClick={() => setToggleReminerPanel(!toggleReminerPanel)}
              initial={{ bottom: "-50%" }}
              animate={{ bottom: focused ? "7.5%" : "-50%" }}
              transition={{ duration: 0.3, ease: "easeIn" }}
              className={`${
                toggleReminerPanel ? "text-black" : "text-white"
              } rounded-md  self-end  z-10 absolute mr-4 *:text-xl`}
            >
              {!toggleReminerPanel ? <MdOutlineTimer /> : <RxCross2 />}
            </motion.button>
            {toggleReminerPanel && (
              <motion.span
                initial={{ bottom: "-50%" }}
                animate={{ bottom: toggleReminerPanel ? "0" : "-50%" }}
                transition={{ duration: 0.3, ease: "easeIn" }}
                className="absolute bottom-0 h-16 w-full bg-white text-black overflow-hidden flex justify-around items-center"
                onMouseEnter={() => setFocused(true)}
              >
                <h4>Set Reminder</h4>

                <div className="flex justify-around items-center *:p-2 bg-[#D3D3D3] *:text-center">
                  {/* Hour Input */}
                  <input
                    type="time"
                    className="w-[10vw]"
                    value={timeInput}
                    onChange={(e) => setTimeInput(e.target.value)}
                  />
                </div>

                {/* Optional Music Input */}
                <input
                  type="file"
                  name="todo-music"
                  id="todo-music"
                  placeholder="."
                />
              </motion.span>
            )}
          </div>
        )}
      </motion.form>
    </section>
  );
}
