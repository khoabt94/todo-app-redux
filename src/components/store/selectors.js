import { createSelector } from "reselect";

export const todoSelector = (state) => state.todo;

export const filterSelector = (state) => state.filter;

export const todoFilterSelector = createSelector(
  [todoSelector, filterSelector],
  (todo, { search, status, priority: priorityFilter }) => {
    return todo.filter((el) => {
      if (status === "All") {
        return priorityFilter.length > 0
          ? el.name.includes(search) && priorityFilter.includes(el.priority)
          : el.name.includes(search);
      }

      return (
        el.name.includes(search) &&
        (status === "Completed" ? el.isComplete : !el.isComplete) &&
        (priorityFilter.length ? priorityFilter.includes(el.priority) : true)
      );
    });
  }
);
