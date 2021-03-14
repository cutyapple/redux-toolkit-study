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
  toggleDone: (state, { payload }) => {
    const { todoList } = state;
    const { id } = payload;

    const targetIdx = todoList.findIndex((todo) => todo.id === id);

    todoList[targetIdx].done = !todoList[targetIdx].done;
  },
  modifyTodo: {
    prepare: ({ title, id, done }) => ({
      payload: {
        title,
        id,
        done,
      },
    }),
    reducer: (state, { payload }) => {
      const { todoList } = state;
      const { id } = payload;
      console.log(payload);

      const targetIdx = todoList.findIndex((todo) => todo.id === id);

      todoList[targetIdx] = payload;
    },
  },
  removeTodo: (state, { payload }) => {
    const { todoList } = state;
    const { id } = payload;

    todoList.splice(
      todoList.findIndex((todo) => todo.id === id),
      1
    );
  },
};

const todoSlice = createSlice({
  name,
  initialState,
  reducers,
});

export const {
  addTodo,
  toggleDone,
  modifyTodo,
  removeTodo,
} = todoSlice.actions;
export default todoSlice.reducer;
