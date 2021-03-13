import React from "react";
import * as S from "./style";

const TodoItem = ({ id, title, done }) => {
  return (
    <S.Container>
      <S.TodoText done={done}>{title}</S.TodoText>
      <S.DoneCheckBtn></S.DoneCheckBtn>
      <S.ModifyBtn></S.ModifyBtn>
      <S.DeleteBtn></S.DeleteBtn>
    </S.Container>
  );
};

export default TodoItem;
