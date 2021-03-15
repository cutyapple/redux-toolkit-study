import React from "react";

const TodoListItem = ({ id, title, done, handleClick }) => {
  return (
    <div>
      <p>{title}</p>
      <button onClick={() => handleClick(id)}>완료</button>
    </div>
  );
};

export default TodoListItem;
