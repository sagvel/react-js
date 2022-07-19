import React from 'react';
import ReactDOM from 'react-dom';
// import Search from './Search.jsx';
import './index.scss';

const rootElem = document.querySelector('#root');

function App() {
  return (
    <>
      <h1>App component</h1>
      {/* <Search /> */}
    </>
  );
}

ReactDOM.render(<App />, rootElem);
