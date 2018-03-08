import React from 'react';
import App from '../src/App';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

describe('App', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe ('App component', () => {
  it('starts with a movie', () => {
    const movies = [{
      Title : 'Batman Begins',
      Year : '2005',
      Poster : "https://images-na.ssl-images-amazon.com/images/M/MV5BYzc4ODgyZmYtMGFkZC00NGQyLWJiMDItMmFmNjJiZjcxYzVmXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg"
    }, {
      Title : 'Superman Saves the World',
      Year : '1978',
      Poster : "https://images-na.ssl-images-amazon.com/images/M/MV5BYzc4ODgyZmYtMGFkZC00NGQyLWJiMDItMmFmNjJiZjcxYzVmXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg"
      }
    ]

    const wrapper = shallow(<App movies={movies} />);
    const resultComponent = wrapper.find('movieList');
    console.log(resultComponent);
    expect(resultComponent.get(0).state.movie).toEqual({
      title : 'Batman Begins',
      year : '2005',
      poster : "https://images-na.ssl-images-amazon.com/images/M/MV5BYzc4ODgyZmYtMGFkZC00NGQyLWJiMDItMmFmNjJiZjcxYzVmXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg"
    });
  });
});
