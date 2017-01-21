import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import App from './components/app';
import CounterContainer from './containers/counter';
import reducer from './reducers/reducers'
import {Router, Route, browserHistory} from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

let store = createStore(reducer);
injectTapEventPlugin();

render (
  (
    <MuiThemeProvider>
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}/>
            <Route path="/counter" component={CounterContainer}/>
        </Router>
    </Provider>
    </MuiThemeProvider>
  ),
  document.getElementById('root')
);
