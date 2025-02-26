export default function TodoListItems() {
  /* @ Error Handling (>Avoid activeIndexing to [] error while map )
    Has Todo
    Has Todo.todo.length>0
    Has Todo.todo[index].title
    Has Todo.todo[index].items
  */
  return (
    <main className="flex flex-col *:mt-4 items-center overflow-y-scroll">
      {Array.from({ length: 10 }).map((item, _) => {
        return (
          <div
            key={_ + 10}
            className="bg-[#252525] min-h-[70px] p-3 pl-4 w-[45vw] rounded-sm transition-all"
          >
            <div className="check h-4 w-4 border-2 rounded-full border-gray-500" />
          </div>
        );
      })}
    </main>
  );
}
