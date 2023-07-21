import React from "react";
import { Link } from "react-router-dom";
import user from "../../images/user.avif";
import { useState } from "react";
import "../../scss/components/Header.scss";
import tachyons from 'tachyons';
import {useDispatch} from "react-redux";
import {fetchAsyncMovies, fetchAsyncShows} from "../../Redux/movies/movieSlice";

const Header = () => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();

  const submitHandler = e => {
    e.preventDefault();
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
  }
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">Movie App</Link>
      </div>
      <div className="searhbar">
        <form onSubmit={submitHandler}>
          <input
          className=""
            type="text"
            value={term}
            placeholder="Search"
            onChange={() => setTerm()}
          />
          <a class="f6 link dim ba bw2 ph3 pv2 ma2 dib dark-green br-pill" href="#0">
            Go
          </a>
        </form>
      </div>
      <div className="user-image">
        <img src={user} alt="user"></img>
      </div>
    </div>
  );
};

export default Header;
