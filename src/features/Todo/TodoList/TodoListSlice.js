import { createSlice } from "@reduxjs/toolkit";

let todoId = 3;

const name = "TODOLIST";
const initialState = {
  todoList: [
    {
      id: 1,
      title: "오감자 먹기",
      done: false,
    },
    {
      id: 2,
      title: "오감자 팔기",
      done: true,
    },
  ],
};
const reducers = {
  addTodo: {
    prepare: ({ title }) => ({
      payload: {
        title,
        id: todoId++,
        done: false,
      },
    }),

    reducer: (state, { payload }) => {
      state.todoList.push(payload);
    },
  },
  removeTodo: (state, { payload }) => {
    const { id } = payload;
    return state.todoList.splice(
      state.findIndex((todo) => todo.id === id),
      1
    );
  },
};

const todoSlice = createSlice({
  name,
  initialState,
  reducers,
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
