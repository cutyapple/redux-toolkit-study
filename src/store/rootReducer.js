import postListSlice, {
  POSTLIST,
} from "../features/Post/PostList/PostListSlice";
import todoSlice from "../features/Todo/TodoList/TodoListSlice";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
  [POSTLIST]: postListSlice,
  todo: todoSlice,
});

export default rootReducer;
