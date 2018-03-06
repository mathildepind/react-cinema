import React from 'react';
import Button from './Button';
import Result from './Result';



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {};

    this.handleClickReceiver = this.handleClickReceiver.bind(this);
  }

  handleClickReceiver(input){

    fetch(`http://www.omdbapi.com/?s=${input}&apikey=25a585bd`)
    .then((response)=>{
     return response.json()
    }).then((myJsonData)=>{
     let movieObject = myJsonData.Search;
     this.setState({movies : movieObject});
     console.log(this.state.movies);
    }).catch((error) =>{
     console.log(error);
    });
  }


  render(){
    let movies = this.state.movies;

    return (
      <div>
        <Button
          receiver = {this.handleClickReceiver}
        />
        <Result
          title={this.state.Title}
          year={this.state.Year}
          poster={this.state.Poster}
          <ul>
            {movies.map(function(movie, index){
              return <li key={ index }>{movie}</li>;
            })}
          </ul>
        />


      </div>
    )
  }
}

export default App;
