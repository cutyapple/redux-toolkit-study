import React from "react";
import * as S from "./style";

import TodoListContainer from "../../features/Todo/TodoList/TodoListContainer";
import TodoFormContainer from "../../features/Todo/TodoForm/TodoFormContainer";

const Todo = () => {
  return (
    <S.Container>
      <TodoFormContainer />
      <TodoListContainer />
    </S.Container>
  );
};

export default Todo;
