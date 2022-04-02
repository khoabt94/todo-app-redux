import { configureStore } from "@reduxjs/toolkit";
import { reducer as todoReducer } from "../TodoList/TodoSlice";
import { reducer as filterReducer } from "../Filters/FilterSlice";

// eslint-disable-next-line no-undef
const store = configureStore({
  reducer: {
    todo: todoReducer,
    filter: filterReducer,
  },
});

export default store;
