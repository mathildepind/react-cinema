import React from 'react';
import SearchForm from './SearchForm';
import Result from './Result';
import MovieDetails from './MovieDetails';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      movies : [],
      movieData : {},
      movie : null
    };

    this.handleClickReceiver = this.handleClickReceiver.bind(this);
    this.handleMovieClickReceiver = this.handleMovieClickReceiver.bind(this);
    this.fetchMovie = this.fetchMovie.bind(this);
  }

  handleClickReceiver(input){
    fetch(`http://www.omdbapi.com/?s=${input}&apikey=25a585bd`)
    .then((response)=>{
     return response.json()
    }).then((myJsonData)=>{
     let movieArray = myJsonData.Search;
     this.setState({movies : movieArray});

    }).catch((error) =>{
     console.log(error);
    });
  }

  handleMovieClickReceiver(input){
    let encodedInput = encodeURIComponent(input);
    fetch(`http://www.omdbapi.com/?t=${encodedInput}&apikey=25a585bd`)
    .then((response)=>{
     return response.json()
    }).then((myJsonData)=>{
     let movieObject = myJsonData;
     this.setState({movieData : movieObject});
     console.log(movieObject);

    }).catch((error) =>{
     console.log(error);
    });
  }

  fetchMovie(){
    fetch('http://www.omdbapi.com/?t=batman&apikey=25a585bd')
    .then(response => response.json())
    .then(movie => this.setState({ movie }));
  }

  render(){
    const movie = this.state.movie ? <h1>{this.state.movie.Title}</h1> : null;

    const {movies, movieData} = this.state;

    const movieInfo = this.state.movieData ? <MovieDetails movie={movieData} /> : null;
    const movieList = movies.map(movie => {
      return <Result movie={movie} key={movie.imdbID} receiver={this.handleMovieClickReceiver} />;
    });


    return (
      <div>
        <SearchForm
          receiver = {this.handleClickReceiver}
        />
        <div>
          {movieList}

      </div>

        <div>
          {movieInfo}
        </div>
      </div>


    )
  }
}

export default App;
