import React from "react";

import { render, fireEvent } from "@testing-library/react";

import TodoListItem from "../../../features/Todo/TodoListItem/TodoListItem";

describe("<TodoListItem />", () => {
  const dispatch = jest.fn();

  it("render todoListItem", () => {
    const { container } = render(<TodoListItem title={"오감자 먹기"} />);

    expect(container).toHaveTextContent("오감자 먹기");
  });

  it("render todoList", () => {
    const testData = { id: 1, title: "감자", done: false };

    const { container, getAllByText } = render(<TodoListItem {...testData} />);

    expect(container).toHaveTextContent("감자");

    const buttons = getAllByText("완료");

    fireEvent.click(buttons[0]);

    expect(dispatch).toBeCalledWith(1);
  });
});
