import React from "react";

import { render, fireEvent } from "@testing-library/react";

import todoListFixtures from "../../../__fixtures__/Todo/todoList";

import TodoList from "../../../features/Todo/TodoList/TodoList";

describe("<TodoList>", () => {
  const handleClick = jest.fn();

  const renderList = (todoList) => {
    return render(<TodoList todoList={todoList} handleClick={handleClick} />);
  };

  describe("without todoList", () => {
    it("renders no todoList message", () => {
      const { container } = renderList([]);

      expect(container).toHaveTextContent("할 일이 없네요");
    });
  });

  describe("with todoList", () => {
    it("render todoList", () => {
      const { container } = renderList(todoListFixtures);

      expect(container).toHaveTextContent("오감자 먹기");
      expect(container).toHaveTextContent("오감자 팔기");
    });
  });

  it(`renders "완료" buttons to delete a todo`, () => {
    const { getAllByText } = renderList(todoListFixtures);

    const buttons = getAllByText("완료");

    fireEvent.click(buttons[0]);

    expect(handleClick).toBeCalled();
  });
});
