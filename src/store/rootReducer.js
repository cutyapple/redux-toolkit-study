const { combineReducers } = require("redux");

import todoListSlice from "../features/Todo/TodoList/Slice";
import { todoListName } from "../features/Todo/TodoList/Slice";

const rootReducer = combineReducers({
  [todoListName]: todoListSlice,
});

export default rootReducer;
