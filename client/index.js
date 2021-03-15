import React from 'react';
import ReactDOM from 'react-dom';
import './styles/app.css';

const App = () => {
  return (
    <p>my first component!</p>
  );
};

ReactDOM.render(<App />, document.querySelector('#app'));