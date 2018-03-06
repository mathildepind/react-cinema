import React from 'react';

class Result extends React.Component {

  render() {
    const {title, year, poster} = this.props;
    return (
      <div>
        <h2>{title}</h2>
        <h3>{year}</h3>
        <img
          src={poster}
          alt={title}
        />
      </div>
    )
  }
}




export default Result;
