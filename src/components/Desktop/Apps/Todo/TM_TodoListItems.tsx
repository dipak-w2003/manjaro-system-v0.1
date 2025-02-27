import { RootState } from "@/Redux/store";
import { useSelector } from "react-redux";
import {
  MdOutlineRadioButtonChecked,
  MdOutlineRadioButtonUnchecked,
} from "react-icons/md";
export default function TodoListItems() {
  // extract activeIndex and todo
  const { activeIndex, todo } = useSelector(
    (state: RootState) => state.devTodo
  );
  // if items:{}[] not exists make it an empty array
  const activeItems = todo[activeIndex]?.items || [];

  const dateFormatter = (date: string): string => {
    const [YYYY, MM, DD] = date.split("-");
    return `${YYYY}/${MM}/${DD}`;
  };
  return (
    <main className="flex flex-col *:mt-4 items-center overflow-y-scroll scrollbar-hide scroll-smooth noto-sans">
      {activeItems.length > 0 ? (
        activeItems.map((item) => (
          <section
            key={String(item.todoTitle + item.tag)}
            className={`bg-[#252525] min-h-[70px] p-3 pl-4 w-[45vw] rounded-sm transition-all flex justify-start items-center  `}
          >
            {item.isCompleted ? (
              <MdOutlineRadioButtonChecked />
            ) : (
              <MdOutlineRadioButtonUnchecked />
            )}
            <article className="flex flex-col gap relative w-full gap-2">
              <pre className="ml-3 text-xs ">{dateFormatter(item.date)}</pre>
              <h3 className="ml-3">{item.todoTitle}</h3>
              <pre className="absolute right-1 top-3">#{item.tag}</pre>
            </article>
          </section>
        ))
      ) : (
        <p className="text-gray-400">No tasks available</p>
      )}
    </main>
  );
}
