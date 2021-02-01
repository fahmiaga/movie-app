import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getMovieById } from "../../redux/action/movie";
import { Jumbotron, Container, Button } from "reactstrap";

function MovieDetail(props) {
  const imgUrl = "https://image.tmdb.org/t/p/w500";
  const { id } = useParams();

  useEffect(() => {
    props.getMovieById(id);
  }, []);

  return (
    <div>
      <div>
        <Jumbotron
          style={{
            backgroundImage: `url(${imgUrl}/${props.movie.backdrop_path})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            opacity: "90%",
            color: "white",
          }}
        >
          <h1 className="display-3">{props.movie.title}</h1>
          <p className="lead">Popularity : {props.movie.popularity}</p>
          <hr className="my-2" />
          <p>{props.movie.overview}</p>
        </Jumbotron>
        <Container>
          <div>
            <Button className="mr-2 mb-2 rounded-pill" color="danger">
              Overview
            </Button>
            <Button className="mr-2 mb-2 rounded-pill" color="light">
              Character
            </Button>
            <Button className="mr-2 mb-2 rounded-pill" color="light">
              Review
            </Button>
          </div>
          <div>
            <h3>Synopsys</h3>
            <p>{props.movie.overview}</p>
          </div>
          <div className="movie-info">
            <h3>Movie Info</h3>
            <li>
              <span className="bold">Release Date</span> :{" "}
              {props.movie.release_date}
            </li>
            <li>
              <span className="bold">Tagline</span> : {props.movie.tagline}
            </li>
            <li>
              <span className="bold">Status</span> : {props.movie.status}
            </li>
            <li>
              <span className="bold">Vote Average</span> :{" "}
              {props.movie.vote_average}
            </li>
          </div>
        </Container>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    movie: state.movie,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMovieById: (id) => dispatch(getMovieById(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
