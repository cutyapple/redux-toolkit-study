import React from "react";

import { useSelector } from "react-redux";

import TodoList from "./TodoList";

const TodoListContainer = () => {
  const { todoList } = useSelector((state) => state.todo);

  return <TodoList todoList={todoList} />;
};

export default TodoListContainer;
