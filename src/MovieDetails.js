import React from 'react';

class MovieDetails extends React.Component{
  render(){
    return (
    <div>
      <h2>{this.props.movie.Title}</h2>
      <h3>{this.props.movie.Year}</h3>
      <h3>{this.props.movie.Director}</h3>
      <h4>{this.props.movie.Plot}</h4>
      <img
        src={this.props.movie.Poster}
        alt={this.props.movie.Title}
      />
    </div>
  )
  }
}

export default MovieDetails;
