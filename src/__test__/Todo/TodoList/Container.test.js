import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { render, fireEvent } from "@testing-library/react";

import todoListFixtures from "../../../__fixtures__/Todo/todoList";

import TodoListContainer from "../../../features/Todo/TodoList/Container";
import { todoListName } from "../../../features/Todo/TodoList/Slice";

jest.mock("react-redux");

describe("<TodoList/Container.js>", () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) =>
    selector({
      [todoListName]: {
        todoList: todoListFixtures,
      },
    })
  );

  it("render todoList", () => {
    const todoList = todoListFixtures;

    const { container, getAllByText } = render(
      <TodoListContainer todoList={todoList} />
    );

    expect(container).toHaveTextContent("오감자 먹기");
    expect(container).toHaveTextContent("오감자 팔기");

    const buttons = getAllByText("완료");

    fireEvent.click(buttons[0]);

    // expect(dispatch).toBeCalledWith(1);
  });
});
