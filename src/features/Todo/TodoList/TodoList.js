import React from "react";
import * as S from "./style";

import TodoItemContainer from "../TodoItem/TodoItemContainer";

const TodoList = ({ todoList }) => {
  return (
    <S.Container>
      <ul>
        {todoList.map((todo) => (
          <TodoItemContainer key={todo.id} {...todo} />
        ))}
      </ul>
    </S.Container>
  );
};

export default TodoList;
