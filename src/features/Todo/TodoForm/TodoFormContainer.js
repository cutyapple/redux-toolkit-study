import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "../TodoList/TodoListSlice";

import TodoForm from "./TodoForm";

const TodoFormContainer = () => {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState("");

  const todoTextManageMent = { todoText, setTodoText };

  const handleClickAdd = useCallback(
    (e) => {
      console.log(1);

      e.preventDefault();

      if (todoText) {
        dispatch(addTodo({ title: todoText }));

        setTodoText("");
      } else {
        alert("할 일을 입력해주세요.");
      }
    },
    [dispatch, todoText]
  );

  return (
    <TodoForm
      handleClickAdd={handleClickAdd}
      todoTextManageMent={todoTextManageMent}
    />
  );
};

export default TodoFormContainer;
