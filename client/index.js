import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import store from './store';

import './styles/app.css';
import Description from './containers/description';

const App = (props) => {
  // console.log(props);

  return (
    <Router>
      <Description />
    </Router>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.querySelector('#app-justin-description'));