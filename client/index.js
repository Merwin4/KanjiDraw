import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

let appContainer = document.getElementById('app');
render(<App />, appContainer);
if (module.hot) {
  module.hot.accept();
}
