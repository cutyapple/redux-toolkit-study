import React from "react";
import * as S from "./style";

const TodoForm = ({ todoTextManageMent, handleClickAdd }) => {
  const { todoText, setTodoText } = todoTextManageMent;

  return (
    <S.Container onSubmit={handleClickAdd}>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button type="submit">추가하기</button>
    </S.Container>
  );
};

export default TodoForm;
