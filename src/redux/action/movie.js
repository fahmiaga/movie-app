import axios from "axios";
import _ from "lodash";
export const getMovies = () => {
  return (dispatch) => {
    return axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=b8ef0f01e1576b7cc5057b3500920495&language=en-US&page=1"
      )
      .then((res) => {
        if (res.data.results && !_.isEmpty(res.data.results)) {
          dispatch({
            type: "GET_MOVIES",
            payload: res.data.results,
          });
        }
        // dispatch({
        //   type: "GET_MOVIES",
        //   payload: res.data.results,
        // });
      })
      .catch((err) => console.log(err));
  };
};

export const getGenres = () => {
  return (dispatch) => {
    return axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=b8ef0f01e1576b7cc5057b3500920495&language=en-US&page=1"
      )
      .then((res) => {
        dispatch({
          type: "GET_GENRES",
          payload: res.data.genres,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const getMoviesByGenre = (id) => {
  return (dispatch) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=b8ef0f01e1576b7cc5057b3500920495&language=en-US&page=1discover/movie?api_key=b8ef0f01e1576b7cc5057b3500920495&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`
      )
      .then((res) => {
        dispatch({
          type: "GET_MOVIES_BY_GENRES",
          payload: res.data.results,
        });
      });
  };
};
export const getMovieById = (id) => {
  return (dispatch) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=8508a0bd1efc493c4bfa095b6a37f250&language=en-US`
      )
      .then((res) => {
        dispatch({
          type: "GET_MOVIE_BY_ID",
          payload: res.data,
        });
      });
  };
};
