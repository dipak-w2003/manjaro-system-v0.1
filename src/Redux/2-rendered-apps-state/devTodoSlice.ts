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
      state.activeIndex = action.payload;
      saveToLocalStorage(state); // Save to localStorage
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

    // Todo : if payload === state.activeIndex then after deletion the activeIndex should be len of state.todo
    // Error : last List deletion not setting
    removeTodoList: (state, action: PayloadAction<number>) => {
      state.todo.splice(action.payload, 1);
      if (action.payload === state.activeIndex) {
        if (state.todo.length > 1) {
          state.activeIndex = state.todo.length - 1;
        } else {
          state.activeIndex = 0;
        }
      }
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
    removeTodoListItems:()=>{

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
  },
});

export const {
  setActiveIndex,
  addTodoList,
  removeTodoList,
  addTodoListItems,
  updateTodoListTitle,
  updateTodoListItems,
} = todoSlice.actions;

export default todoSlice.reducer;
