import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
  name: "filter",
  initialState: {
    search: "",
    status: "All",
    priority: [],
  },
  reducers: {
    filterSearch(state, action) {
      // eslint-disable-next-line no-undef
      state.search = action.payload;
    },
    filterStatus(state, action) {
      // eslint-disable-next-line no-undef
      state.status = action.payload;
    },
    filterPriority(state, action) {
      // eslint-disable-next-line no-undef
      state.priority = action.payload;
    },
  },
});

const combineAction = {
  ...actions,
};

export { combineAction as filterActions, reducer };
