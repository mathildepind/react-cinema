import React from 'react';
import MovieDetails from './MovieDetails';

class Result extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      movieTitle : ''
    }
  this.handleMovieClick = this.handleMovieClick.bind(this);
  }


  handleMovieClick(event){
    let title = this.props.movie.Title;
    this.setState = {movieTitle : title};
    this.props.receiver(title);
    console.log(title);
  }


  render() {
    const {movie} = this.props;
    return (
      <div onClick={this.handleMovieClick}>
        <h2>{movie.Title}</h2>
        <h3>{movie.Year}</h3>
        <img
          src={movie.Poster}
          alt={movie.Title}
        />

      </div>
    )
  }
}




export default Result;
