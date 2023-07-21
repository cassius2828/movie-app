import { createStore } from "redux";
import { sampleReducer } from "../Reducers/index.js";

export const store = createStore(sampleReducer);
