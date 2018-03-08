import React from 'react';
import fetchMock from 'fetch-mock';
import {shallow} from 'enzyme';
import App from '../src/App';

describe('App fetch', () => {
  describe('fetch and display movies', () => {
    beforeEach(() => {
      fetchMock.get('*', {
        Title : 'Batman Begins',
        Year : '2005',
        Poster : "url:XYZ"
      }
    )}

    it('it starts with a movie', done => {
      const wrapper = shallow(<App />);
      const button = wrapper.find('button').simulate('click');
      // wrapper.instance().handleClickReceiver()

      setTimeout(() => {
        const updated = wrapper.update();
        const text = updated.find('h1').text();
        expect(text).toEqual('The Best Test Movie');
        // const renderedResultComponent = updated.find(<Result movie={movie}/>);
        // expect(renderedResultComponent).toEqual('')
        done();
      }, 0);
    });

    afterEach(() => {
      fetchMock.restore();
    });
  });
});
