import React from "react";
import * as S from "./style";

const TodoItem = ({
  itemData,
  modifyModeData,
  onClickDoneCheckBtn,
  onChangeModifyModeValue,
  onClickModifyBtnClick,
  onClickDeleteBtn,
}) => {
  const { id, title, done } = itemData;

  return (
    <S.Container>
      {modifyModeData.isModifyMode ? (
        <input
          type="text"
          value={modifyModeData.modifyTitle}
          onChange={(e) => onChangeModifyModeValue(e)}
        />
      ) : (
        <S.TodoText done={done}>{title}</S.TodoText>
      )}
      <S.DoneCheckBtn onClick={() => onClickDoneCheckBtn(id)}>
        체크
      </S.DoneCheckBtn>
      <S.ModifyBtn onClick={() => onClickModifyBtnClick(modifyModeData)}>
        {modifyModeData.isModifyMode ? "저장" : "수정"}
      </S.ModifyBtn>
      <S.DeleteBtn onClick={() => onClickDeleteBtn(id)}>삭제</S.DeleteBtn>
    </S.Container>
  );
};

export default TodoItem;
