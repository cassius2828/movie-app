import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../Redux/movies/movieSlice";
import MovieCard from "./MovieCard";
import "../../scss/components/MovieListing.scss";
import tachyons from "tachyons";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  let renderMovies,
    renderShows = "";

  renderMovies = movies.Response ? (
    movies.Search.map((movie, index) => {
      return <MovieCard key={index} data={movie} />;
    })
  ) : (
    <div className="movies-error">
      <h3>{movies.error}</h3>
    </div>
  );

  renderShows = shows.Response ? (
    shows.Search.map((show, index) => {
      return <MovieCard key={index} data={show} />;
    })
  ) : (
    <div className="movies-error">
      <h3>{movies.error}</h3>
    </div>
  );

  console.log(movies);
  return (
    <div className="movie-wrapper">
      <div className="movie-list tc pa2">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>
      <div className="show-list tc pa2">
        <h2>Shows</h2>
        <div className="show-container">{renderShows}</div>
      </div>
    </div>
  );
};

export default MovieListing;
