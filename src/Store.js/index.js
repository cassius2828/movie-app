import { createStore } from "redux";
import { sampleReducer } from "../Reducers.js";

export const store = createStore(sampleReducer);
