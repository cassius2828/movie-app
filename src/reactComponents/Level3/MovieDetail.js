import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncShowsOrMovieDetail,
  removeSelectedMovieOrShow,
  getSelectedMovieOrShow,
} from "../../Redux/movies/movieSlice";
import "../../scss/components/MovieDetails.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faThumbsUp,
  faFilm,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import tachyons from "tachyons";

const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShow);
  useEffect(() => {
    dispatch(fetchAsyncShowsOrMovieDetail(imdbID));
    return () => {
      dispatch(removeSelectedMovieOrShow());
    };
  }, [dispatch, imdbID]);

  return (
    <div className="movie-section">
      {Object.keys(data).length === 0 ? (
        <h1>...Loading</h1>
      ) : (
        <>
          <div className="section-left ma4">
            <div className="movie-title">{data.Title}</div>
            <div className="movie-rating">
              <span>
                IMDB Rating
                <FontAwesomeIcon className="mr1 ml2 star" icon={faStar} />:{" "}
                {data.imdbRating}
              </span>

              <span>
                IMDB Votes
                <FontAwesomeIcon
                  className="mr1 ml2 icons"
                  icon={faThumbsUp}
                />{" "}
                : {data.imdbVotes}
              </span>

              <span>
                Runtime
                <FontAwesomeIcon
                  className="mr1 ml2 icons"
                  icon={faFilm}
                /> : {data.Runtime}
              </span>

              <span>
                Year
                <FontAwesomeIcon
                  className="mr1 ml2 icons"
                  icon={faCalendar}
                />{" "}
                : {data.Year}
              </span>
            </div>
            <div className="movie-plot">{data.Plot}</div>
            <div className="movie-info">
              {/* space */}
              <div>
                <span>Director</span>
                <span>{data.Director}</span>
              </div>{" "}
              {/* space */}
              <div>
                <span>Stars</span>
                <span>{data.Actors}</span>
              </div>{" "}
              {/* space */}
              <div>
                <span>Genres</span>
                <span>{data.Genre}</span>
              </div>{" "}
              {/* space */}
              <div>
                <span>Languages</span>
                <span>{data.Language}</span>
              </div>{" "}
              {/* space */}
              <div>
                <span>Awards</span>
                <span>{data.Awards}</span>
              </div>
            </div>
          </div>
          <div className="section-right ma4">
            <img src={data.Poster} alt={data.Title} />
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetail;
