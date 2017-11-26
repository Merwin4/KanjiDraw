import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';

import App from './components/App';
import Greetings from './components/hello';
import SignUpPage from './components/signup/signup'

let appContainer = document.getElementById('app');
render((
  <Router>
    <div>
      <Route path="/" component={App}/>
      <Route exact path="/" component={Greetings} />
      <Route path="/signup" component={SignUpPage}/>
    </div>
  </Router>
  ), appContainer);
if (module.hot) {
  module.hot.accept();
}
