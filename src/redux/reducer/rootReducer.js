const initialState = {
  movies: [],
  genres: [],
  id: 0,
};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_MOVIES":
      return {
        ...state,
        movies: payload,
      };
    case "GET_GENRES":
      return {
        ...state,
        genres: payload,
      };
    case "GET_MOVIES_BY_GENRES":
      return {
        ...state,
        movies: payload,
        id: payload,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
