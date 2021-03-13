import React from "react";
import * as S from "./style";

import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({ todoList }) => {
  return (
    <S.Container>
      <ul>
        {todoList.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </S.Container>
  );
};

export default TodoList;
