import todoSlice from "../features/Todo/TodoList/TodoListSlice";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
  todo: todoSlice,
});

export default rootReducer;
