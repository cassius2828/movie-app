import React from "react";
import { Link } from "react-router-dom";
import "../../scss/components/MovieCard.scss";
import tachyons from "tachyons";

const MovieCard = (props) => {
  const { data } = props;
  return (
    <div className="card-item">
      <Link to={`/movie/${data.imdbID}`}>
        <div className="card-inner">
          <div className="card-top">
            <img src={data.Poster} alt={data.Title} />
          </div>
          <div className="card-bottom">
            <div className="card-info tc pa2 pt3">
              <h4>{data.Title}</h4>
              <p>{data.Year}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
