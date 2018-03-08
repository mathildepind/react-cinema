import React from 'react';
import SearchForm from '../src/SearchForm';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

describe('SearchForm component', () => {
  it('correctly renders tree',()=>{
    const tree = renderer.create(<SearchForm/>).toJSON();
    expect (tree).toMatchSnapshot();
  })

  it('starts with a movie', () =>{
    const wrapper = shallow(<SearchForm />);
    const event = {
      target: {
        value: 'batman'
      }
    }
    wrapper.find('input').simulate('change', event);
    // const text = wrapper.state('movieSearch');
    // expect(text).toEqual('batman');
    const value = wrapper.find('input').props().value;
    expect(value).toBe('batman');
  });

  it('calls reciever prop function with value state',()=>{
    const receiver = jest.fn();
    const event = {
      preventDefault: jest.fn()
    };

    const wrapper = shallow(<SearchForm receiver={receiver} />);
    wrapper.setState({movieSearch:'Aquaman'});
    wrapper.find('form').simulate('submit',event);

    expect(receiver.mock.calls).toEqual([
      ['Aquaman']
    ]);

    expect(event.preventDefault.mock.calls).toEqual([[]]);

});


});
