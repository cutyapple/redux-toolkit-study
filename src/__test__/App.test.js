import React from "react";

import { render } from "@testing-library/react";

import todoListFixtures from "../__fixtures__/Todo/todoList";

import TodoList from "../features/Todo/TodoList/TodoList";

describe("<App/>", () => {
  it("render todoList", () => {
    const todoList = todoListFixtures;

    const { container } = render(
      <>
        <div>
          <TodoList todoList={todoList} />
        </div>
      </>
    );

    expect(container).toHaveTextContent("오감자 먹기");
    expect(container).toHaveTextContent("오감자 팔기");
  });
});
