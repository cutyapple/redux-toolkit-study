import React from "react";
import * as S from "./style";
import TodoForm from "../../features/Todo/TodoForm/TodoForm";
import TodoListContainer from "../../features/Todo/TodoList/TodoListContainer";

const Todo = () => {
  return (
    <S.Container>
      <TodoForm />
      <TodoListContainer />
    </S.Container>
  );
};

export default Todo;
