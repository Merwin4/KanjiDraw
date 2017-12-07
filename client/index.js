import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';
import Greetings from './components/hello';
import SignupPage from './components/signup/signup'
import PracticePage from './components/practice/practice';

let appContainer = document.getElementById('app');
const store = createStore(
  (state = {}) => state,
  applyMiddleware(thunk)
);

render((
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" component={App}/>
        <Route exact path="/" component={Greetings} />
        <Route path="/signup" component={SignupPage}/>
        <Route path="/practice" component={PracticePage} />
      </div>
    </Router>
  </Provider>
  ), appContainer);
if (module.hot) {
  module.hot.accept();
}
