import React from 'react';

class Button extends React.Component {
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
        <form>
          <label>
            <input
              type="text"
              value={this.state.movieSearch}
              onChange={this.handleChange}
            />
          </label>
        </form>

        <button onClick={this.handleClick}>Search</button>
      </div>
    );
  }
};

export default Button;
