import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TodoItems {
  id: string;
  todoTitle: string | number;
  date: string;
  tag: string;
  priority: "high" | "mid" | "low";
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
      state.activeIndex = action.payload;
      saveToLocalStorage(state); // Save to localStorage
    },

    addTodoList: (state, action: PayloadAction<Todo>) => {
      const newList = {
        ...action.payload,
        listTitle: `List ${state.todo.length + 1}`, // Dynamically set list title
      };
      state.todo.push(newList);
      saveToLocalStorage(state); // Save to localStorage
    },

    updateTodoListTitle: (
      state,
      action: PayloadAction<{ listIdx: number; newTitle: string }>
    ) => {
      state.todo[action.payload.listIdx].listTitle = action.payload.newTitle;
      saveToLocalStorage(state); // Save to localStorage
    },

    removeTodoList: (state, action: PayloadAction<number>) => {
      state.todo.splice(action.payload, 1);
      saveToLocalStorage(state); // Save to localStorage
    },

    // Items
    addTodoListItems: (state, action: PayloadAction<TodoItems>) => {
      const activeTodo = state.todo[state.activeIndex];
      // Ensure the 'items' array exists
      if (!activeTodo.items) activeTodo.items = [];
      // Push the new TodoItem
      activeTodo.items.push(action.payload);
      // Save to localStorage
      saveToLocalStorage(state); // Save to localStorage
    },

    addTodos: (state, action: PayloadAction<TodoItems>) => {
      state.todo[state.activeIndex].items.push(action.payload);
      saveToLocalStorage(state); // Save to localStorage
    },

    removeList: (state, action: PayloadAction<number>) => {
      state.todo.splice(action.payload, 1);
      saveToLocalStorage(state); // Save to localStorage
    },
  },
});

export const {
  setActiveIndex,
  addTodoList,
  removeTodoList,
  addTodoListItems,
  updateTodoListTitle,
  addTodos,
} = todoSlice.actions;

export default todoSlice.reducer;
