import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    createTodo(state, action) {
      // eslint-disable-next-line no-undef
      state.push(action.payload);
    },
    checkTodo(state, action) {
      const checkID = state.findIndex((el) => el.id === action.payload);
      state[checkID].isComplete = !state[checkID].isComplete;
    },
  },
});

const combineAction = {
  ...actions,
};

export { combineAction as todoActions, reducer };
