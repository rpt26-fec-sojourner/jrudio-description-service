import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import './styles/app.css';
import Description from './containers/description';

const App = (props) => {
  // console.log(props);

  return <Description />;
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.querySelector('#app-justin-description'));