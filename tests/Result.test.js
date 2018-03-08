import React from 'react';
import Result from '../src/Result';
import renderer from 'react-test-renderer';


describe('Result', () => {
  it('matches the snapshot', () => {
    const movie = {
      Title : 'Batman Begins',
      Year : '2005',
      Poster : "xyz"
    }
    const tree = renderer.create (<Result movie = {movie} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
