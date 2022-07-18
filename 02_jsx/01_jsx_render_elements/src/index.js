import React from 'react';
import ReactDOM from 'react-dom';

const rootElem = document.querySelector('#root');
const formElem = (
  <>
    <h1>Search Form</h1>
    <div>
      <input type="text" />
      <button>Search</button>
    </div>
  </>
);

ReactDOM.render(formElem, rootElem);
