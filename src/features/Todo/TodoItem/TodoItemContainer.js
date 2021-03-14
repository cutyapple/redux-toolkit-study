import React, { useCallback, useState } from "react";

import { useDispatch } from "react-redux";
import { removeTodo, modifyTodo, toggleDone } from "../TodoList/TodoListSlice";

import TodoItem from "./TodoItem";

const TodoItemContainer = ({ id, title, done }) => {
  const itemData = { id, title, done };

  const dispatch = useDispatch();
  const [modifyModeData, setModifyModeData] = useState({
    isModifyMode: false,
    modifyTitle: title,
  });

  const onClickDoneCheckBtn = useCallback(
    (id) => {
      dispatch(toggleDone({ id }));
    },
    [dispatch, toggleDone]
  );
  const onChangeModifyModeValue = useCallback(
    (e) => {
      setModifyModeData({ ...modifyModeData, modifyTitle: e.target.value });
    },
    [modifyModeData]
  );
  const onClickModifyBtnClick = useCallback(
    (todoData) => {
      console.log(todoData);

      if (modifyModeData.isModifyMode) {
        dispatch(modifyTodo({ id, title: todoData.modifyTitle, done }));

        setModifyModeData({
          ...modifyModeData,
          isModifyMode: !modifyModeData.isModifyMode,
        });
      } else {
        setModifyModeData({
          ...modifyModeData,
          isModifyMode: !modifyModeData.isModifyMode,
        });
      }
    },
    [dispatch, modifyTodo, modifyModeData]
  );
  const onClickDeleteBtn = useCallback(
    (id) => {
      dispatch(removeTodo({ id }));
    },
    [dispatch, removeTodo]
  );

  return (
    <TodoItem
      itemData={itemData}
      modifyModeData={modifyModeData}
      onClickDoneCheckBtn={onClickDoneCheckBtn}
      onChangeModifyModeValue={onChangeModifyModeValue}
      onClickModifyBtnClick={onClickModifyBtnClick}
      onClickDeleteBtn={onClickDeleteBtn}
    />
  );
};

export default TodoItemContainer;
