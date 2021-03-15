import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";

const TodoList = ({ todoList, handleClick }) => {
  if (!todoList.length) {
    return <p>할 일이 없네요</p>;
  }

  return (
    <div>
      {todoList.map((todo) => (
        <TodoListItem key={todo.id} {...todo} handleClick={handleClick} />
      ))}
    </div>
  );
};

export default TodoList;
