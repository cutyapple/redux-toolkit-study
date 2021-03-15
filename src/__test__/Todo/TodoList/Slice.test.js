import todoListSlice, {
  todoListActions,
} from "../../../features/Todo/TodoList/Slice";

describe("todoList slice", () => {
  it("has initial state", () => {
    expect(todoListSlice(undefined, { type: "@@INIT" })).toEqual({
      todoList: [],
    });
  });

  it("handles addTodo", () => {
    const { addTodo } = todoListActions;

    const state = todoListSlice(undefined, addTodo("새우깡 사기"));

    expect(state.todoList[0].text === "새우깡 사기");
  });

  it("handles toggleTodo", () => {
    const { toggleTodo } = todoListActions;

    const sampleState = {
      todoList: [
        {
          id: 1,
          title: "새우깡 냠냠",
          done: false,
        },
        { id: 2, title: "새우깡 꿀꺽", done: false },
      ],
    };

    const state = todoListSlice(sampleState, toggleTodo(2));
    const expectState = {
      todoList: [
        {
          id: 1,
          title: "새우깡 냠냠",
          done: false,
        },
        { id: 2, title: "새우깡 꿀꺽", done: true },
      ],
    };

    expect(state).toEqual(expectState);
  });

  it("handles removeTodo", () => {
    const { removeTodo } = todoListActions;

    const sampleState = {
      todoList: [
        {
          id: 1,
          title: "새우깡 냠냠",
          done: false,
        },
        { id: 2, title: "새우깡 꿀꺽", done: false },
      ],
    };

    const state = todoListSlice(sampleState, removeTodo(2));
    const expectState = {
      todoList: [
        {
          id: 1,
          title: "새우깡 냠냠",
          done: false,
        },
      ],
    };

    expect(state).toEqual(expectState);
  });
});
