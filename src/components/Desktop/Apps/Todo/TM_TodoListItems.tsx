import { RootState } from "@/Redux/store";
import { useSelector } from "react-redux";

export default function TodoListItems() {
  // extract activeIndex and todo
  const { activeIndex, todo } = useSelector(
    (state: RootState) => state.devTodo
  );
  // if items:{}[] not exists make it an empty array
  const activeItems = todo[activeIndex]?.items || [];

  return (
    <main className="flex flex-col *:mt-4 items-center overflow-y-scroll ">
      {activeItems.length > 0 ? (
        activeItems.map((item) => (
          <section
            key={item.date.getMilliseconds()}
            className={`bg-[#252525] min-h-[70px] p-3 pl-4 w-[45vw] rounded-sm transition-all flex justify-start items-center  `}
          >
            <div
              className={`check h-4 w-4 border-2 rounded-full border-gray-500`}
            />

            <article className="flex flex-col gap relative w-full">
              <h3 className="ml-3">
                {item.date.toLocaleDateString("Default", {
                  dateStyle: "short",
                })}
              </h3>
              <h3 className="ml-3">{item.todoTitle}</h3>
              <h5 className="absolute right-1 top-2">#Tag</h5>
            </article>
          </section>
        ))
      ) : (
        <p className="text-gray-400">No tasks available</p>
      )}
    </main>
  );
}
