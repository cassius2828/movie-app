import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIkey } from "../../common/apis/APIkey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "Harry";
    const response = await movieApi.get(
      `?apiKey=${APIkey}&s=${movieText}&type=movie`
    );
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "shows/fetchAsyncShows",
  async () => {
    const seriesText = "Friends";
    const response = await movieApi.get(
      `?apiKey=${APIkey}&s=${seriesText}&type=series`
    );
    return response.data;
  }
);
export const fetchAsyncShowsOrMovieDetail = createAsyncThunk(
  "shows/fetchAsyncShowsOrMovieDetail",
  async (id) => {
    const response = await movieApi.get(`?apiKey=${APIkey}&i=${id}&Plot=full`);
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectedMovieOrShow: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    
    removeSelectedMovieOrShow: (state) => {
      state.selectedMovieOrShow = {};
    }
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log(" Fetched Successfully ");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("rejected!");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log(" Fetched Successfully ");
      return { ...state, shows: payload };
    },
    [fetchAsyncShowsOrMovieDetail.fulfilled]: (state, { payload }) => {
      console.log(" Fetched Successfully ");
      return { ...state, selectedMovieOrShow: payload };
    },
  },
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;

export default movieSlice.reducer;

export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow;
