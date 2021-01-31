import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

function MovieDetail() {
  const { id } = useParams();
  return <div>Ini Detail</div>;
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    genres: state.genres,
    id: state.id,
  };
};

export default connect(mapStateToProps)(MovieDetail);
