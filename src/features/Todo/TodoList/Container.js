import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoListActions, todoListName } from "./Slice";

import TodoList from "./TodoList";

const TodoListContainer = () => {
  const dispatch = useDispatch();
  const { todoList } = useSelector((state) => state[todoListName]);
  const { removeTodo } = todoListActions;

  const handleClick = useCallback(
    (id) => {
      dispatch(removeTodo(id));
    },
    [dispatch]
  );

  return <TodoList todoList={todoList} handleClick={handleClick} />;
};

export default TodoListContainer;
