import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Counter from '../src/components/counter'

describe('Counter', () => {
  let wrapper, increment, decrement;

  beforeEach(() => {
    increment = jest.fn();
    decrement = jest.fn();
    wrapper = shallow(<Counter counter={12} onIncrement={increment} onDecrement={decrement}/>);
  });

  it('should render current counter value', () => {
    expect(wrapper.find('.count').text()).toContain("12");
  });

  it('should trigger increment callback on clicking +', () => {
    wrapper.find('.increment').simulate('click');

    expect(increment).toHaveBeenCalled();
  });

  it('should trigger decrement callback on clicking -', () => {
    wrapper.find('.decrement').simulate('click');

    expect(decrement).toHaveBeenCalled();
  });
});