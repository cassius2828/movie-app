import "./scss/App.scss";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./reactComponents/Level3/Home";
import MovieDetail from "./reactComponents/Level3/MovieDetail";
import PageNotFound from "./reactComponents/Level3/404";
import Footer from "./reactComponents/Level2/Footer";
import Header from "./reactComponents/Level2/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/movie/:imdbID" Component={MovieDetail} />
          <Route Component={PageNotFound} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
