import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import App from './components/app';
import CounterContainer from './containers/CounterContainer';
import reducer from './reducers/reducers'
import {Router, Route, browserHistory} from 'react-router'

let store = createStore(reducer);

render(
  (<Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={App}/>
        <Route path="/counter" component={CounterContainer}/>
    </Router>
  </Provider>),
  document.getElementById('root')
);
