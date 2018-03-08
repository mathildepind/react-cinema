import React from 'react';

class SearchForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      movieSearch : '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event){
    let searchInput = event.target.value;
    this.setState({
      movieSearch: searchInput
    });
    console.log(this.state.movieSearch);
  }


  handleClick(event){
    event.preventDefault();
    let searchInput = this.state.movieSearch;
    this.props.receiver(searchInput);
    console.log(searchInput);
  }


  render(){
    return (
      <div>
        <form onSubmit={this.handleClick}>
          <label>
            <input
              type="text"
              value={this.state.movieSearch}
              onChange={this.handleChange}
            />
          </label>
            <button type='submit'>Search</button>
        </form>

        {/* <button onClick={this.handleClick}>Search</button> */}
      </div>
    );
  }
};

export default SearchForm;
