import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import thunk from 'redux-thunk';

import './App.scss';


import reducers from './components/reducers';
import BaseLine from './components/baseline/BaseLine';

let store = createStore(reducers, applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <Router className="diet-global">
        <div className="">
          <Provider store={store}>
            <Switch>
              <Route path="/" component={BaseLine} />
            </Switch>
          </Provider>
        </div>
      </Router>
    );
  }
}

export default App;
