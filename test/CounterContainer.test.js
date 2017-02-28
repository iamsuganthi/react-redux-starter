import { shallow, mount, render } from 'enzyme';
import React from 'react';
import CounterContainer from '../src/containers/CounterContainer';
import configureStore from 'redux-mock-store';
const mockStore=configureStore();

describe('Counter Container', () => {
    let wrapper, store;

    beforeEach(() =>{
        store = mockStore(1);
        store.dispatch = jest.fn();
        wrapper = shallow(<CounterContainer store={store}/>);
    });

    it('maps state and dispatch to props', () => {
        expect(wrapper.props()).toEqual(expect.objectContaining({
            counter: 1,
            onIncrement: expect.any(Function),
            onDecrement: expect.any(Function)
        }));
    });

    it('maps onIncrement to dispatch increment action', () => {
        wrapper.props().onIncrement();

        expect(store.dispatch).toHaveBeenCalledWith({type: 'INCREMENT'});
    });
});