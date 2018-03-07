import React from 'react';
import Button from './Button';
import Result from './Result';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      titles : [],
      movies : []
    };

    this.handleClickReceiver = this.handleClickReceiver.bind(this);
  }

  handleClickReceiver(input){

    fetch(`http://www.omdbapi.com/?s=${input}&apikey=25a585bd`)
    .then((response)=>{
     return response.json()
    }).then((myJsonData)=>{
     let movieObject = myJsonData.Search;
     this.setState({movies : movieObject});
     // if (this.state.movies) {
     //   let movieTitles = this.state.movies.map(movie => movie.Title);
     //   this.setState({titles : movieTitles});
     // }

     //console.log(this.state.movies);
    }).catch((error) =>{
     console.log(error);
    });
  }


  render(){
    const {movies} = this.state;

    return (
      <div>
        <Button
          receiver = {this.handleClickReceiver}
        />
        <div>
        {movies.map(function(movie){
          return <Result
            title={movie.Title}
            year={movie.Year}
            poster={movie.Poster}
          />
        })}
      </div>
      </div>

    )
  }
}

export default App;
