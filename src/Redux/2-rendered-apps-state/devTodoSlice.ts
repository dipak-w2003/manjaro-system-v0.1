import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TodoItems {
  id: string;
  todoTitle: string | number;
  todoSummarize?: any;
  date: string;
  tag: string;
  priority: string;
  isCompleted: boolean;
}

export interface Todo {
  listTitle: string;
  items?: TodoItems[];
}

export interface TodoState {
  activeIndex: number;
  todo: Todo[];
}
const loadFromLocalStorage = (): TodoState => {
  try {
    const storedState = localStorage.getItem("devTodo");
    return storedState ? JSON.parse(storedState) : { activeIndex: 0, todo: [] };
  } catch (e) {
    return { activeIndex: 0, todo: [] };
  }
};

const saveToLocalStorage = (state: TodoState) => {
  localStorage.setItem("devTodo", JSON.stringify(state));
};

const initialState = loadFromLocalStorage();

// Redux slice
const todoSlice = createSlice({
  name: "devTodo",
  initialState,
  reducers: {
    setActiveIndex: (state, action: PayloadAction<number>) => {
      // Done : last List deletion not setting
      if (state.todo.length === action.payload)
        state.activeIndex = state.todo.length - 1;
      else state.activeIndex = action.payload;
      saveToLocalStorage(state);

      /* @ if we remove list by providing idx when we remove last one we immediately after set last one as active len of todo-1 */
    },

    addTodoList: (state) => {
      const newList: Todo = {
        listTitle: `List ${state.todo.length + 1}`,
        items: [],
      };
      state.todo.push(newList);
      state.activeIndex = state.todo.length - 1;
      saveToLocalStorage(state);
    },

    updateTodoListTitle: (
      state,
      action: PayloadAction<{ listIdx: number; newTitle: string }>
    ) => {
      state.todo[action.payload.listIdx].listTitle = action.payload.newTitle;
      saveToLocalStorage(state);
    },

    removeTodoList: (state, action: PayloadAction<number>) => {
      state.todo.splice(action.payload, 1);
      saveToLocalStorage(state);
    },

    // List Items CRUD
    //  Add Todo List Items
    addTodoListItems: (state, action: PayloadAction<TodoItems>) => {
      const activeTodo = state.todo[state.activeIndex];
      // Ensure the 'items' array exists
      if (!activeTodo.items) activeTodo.items = [];
      // Push the new TodoItem
      activeTodo.items.push(action.payload);

      saveToLocalStorage(state);
    },
    // remove list items
    removeTodoListItems: (state, action: PayloadAction<number>) => {
      state.todo[state.activeIndex].items.splice(action.payload, 1);
      saveToLocalStorage(state);
    },

    // Update Todo List Items
    updateTodoListItems: (
      state,
      action: PayloadAction<{ idx: number; item: TodoItems }>
    ) => {
      state.todo[state.activeIndex].items.splice(
        action.payload.idx,
        1,
        action.payload.item
      );
      saveToLocalStorage(state);
    },

    // update Todo List Items (IsComplete)
    // Todo : Update this code
    updateTodoListItemSetIsComplete: (
      state,
      action: PayloadAction<{ uid: string; completion: boolean }>
    ) => {
      const grabItem = state.todo[state.activeIndex].items.find(
        (item) => item.id === action.payload.uid
      );
      const idx: number = state.todo[state.activeIndex].items.findIndex(
        (item) => item.id === grabItem.id
      );
      // alert(idx);

      let setCompleteForT: TodoItems = { ...grabItem };
      if (grabItem.isCompleted)
        setCompleteForT = { ...grabItem, isCompleted: false };
      else setCompleteForT = { ...grabItem, isCompleted: true };

      state.todo[state.activeIndex].items.splice(idx, 1, setCompleteForT);
      saveToLocalStorage(state);
    },
  },
});

export const {
  setActiveIndex,
  addTodoList,
  removeTodoList,
  addTodoListItems,
  updateTodoListTitle,
  updateTodoListItems,
  removeTodoListItems,
  updateTodoListItemSetIsComplete,
} = todoSlice.actions;

export default todoSlice.reducer;
