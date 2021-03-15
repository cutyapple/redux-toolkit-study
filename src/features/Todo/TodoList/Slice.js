import { createSlice } from "@reduxjs/toolkit";

let id = 0;

const name = "TODOLIST";
const initialState = {
  todoList: [],
};
const reducers = {
  addTodo: {
    prepare: ({ payload: title }) => ({
      payload: {
        id: id++,
        title,
        done: false,
      },
    }),
    reducer: (state, { payload }) => {
      state.todoList.push(payload);
    },
  },
  toggleTodo: (state, { payload: id }) => {
    const { todoList } = state;

    const targetTodo = todoList.find((todo) => todo.id === id);

    if (!targetTodo) return;

    targetTodo.done = !targetTodo.done;
  },
  removeTodo: (state, { payload: id }) => {
    const { todoList } = state;

    const targetIndex = todoList.findIndex((todo) => todo.id === id);

    if (!targetIndex) return;

    todoList.splice(targetIndex, 1);
  },
};

const todoListSlice = createSlice({
  name,
  initialState,
  reducers,
});

export const todoListName = todoListSlice.name;
export const todoListActions = todoListSlice.actions;
export default todoListSlice.reducer;
