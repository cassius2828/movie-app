import { combineReducers } from "redux";

const defaultState = 0;

export const sampleReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD":
      return state + 1;
    default:
      return state;
  }
};
