import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getMovies, getGenres, getMoviesByGenre } from "../redux/action/movie";
import { Container, Button } from "reactstrap";
import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";
// import axios from "axios";

const imgUrl = "https://image.tmdb.org/t/p/w500";

const HomePage = (props) => {
  const [input, setInput] = useState("");

  useEffect(() => {
    props.getMovies();
  }, []);

  useEffect(() => {
    props.getGenres();
  }, []);

  console.log(props.movies);

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setInput(e.target.value);
  };
  if (input.length > 0) {
    props.movies = props.movies.filter((i) => {
      return i.title.toLowerCase().match(input);
    });
  }

  return (
    <div>
      <Navbar />
      <input
        type="text"
        // name=""
        // id=""
        placeholder="Search Movies"
        onChange={handleChange}
        value={input}
      />
      <Container className="mt-4">
        {props.genres.length !== 0 ? (
          props.genres.map((genre) => (
            <Button
              key={genre.id}
              onClick={() => props.getMoviesByGenre(genre.id)}
              className="mr-2 mb-2 rounded-pill"
              // color={genre.id === genre.id ? "danger" : "light"}
              color="light"
            >
              {genre.name}
            </Button>
          ))
        ) : (
          <div>Loading...</div>
        )}
        <div className="movies-list">
          {props.movies !== 0
            ? props.movies.map((movie, index) => (
                <Link
                  to={`/detail-movie/${movie.id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div className="movie-item" key={index}>
                    <img
                      src={`${imgUrl}${movie.poster_path}`}
                      alt={movie.name}
                    />
                    <h5>{movie.title}</h5>
                    <p>
                      {props.genres.map((genre) =>
                        genre.id === movie.genre_ids[1] ? genre.name : ""
                      )}
                    </p>
                  </div>
                </Link>
              ))
            : ""}
        </div>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    genres: state.genres,
    id: state.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMovies: () => dispatch(getMovies()),
    getGenres: () => dispatch(getGenres()),
    getMoviesByGenre: (id) => dispatch(getMoviesByGenre(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
