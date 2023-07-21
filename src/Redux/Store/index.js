// import { createStore } from "redux";
// import { sampleReducer } from "../Reducers/index.js";

// export const store = createStore(
//   sampleReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

//? The difference between createStore and configureStore is that in the latter
//? the redux dev tools comes with it and you can take reducers as arguments


import {configureStore} from '@reduxjs/toolkit';
import moviesReducer from '../movies/movieSlice';

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
    }
})