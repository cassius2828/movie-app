import React, { useEffect } from "react";
import MovieListing from "../Level4/MovieListing";
import movieApi from "../../common/apis/movieApi";
import { APIkey } from "../../common/apis/APIkey";
import { useDispatch } from "react-redux";
import { addMovies } from "../../Redux/movies/movieSlice";

const Home = () => {
  const movieText = "Harry";
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apiKey=${APIkey}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log("Err :", err);
        });
      dispatch(addMovies(response.data));

      console.log("THE response from API", response);
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
