import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search';
import './index.scss';

const rootElem = document.querySelector('#root');

function App() {
  return (
    <>
      <Search name="Tom" />
    </>
  );
}

ReactDOM.render(<App />, rootElem);
