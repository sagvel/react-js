import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const rootElem = document.querySelector('#root');

const renderSeconds = (time) => {
  const seconds = new Date(time).getSeconds();
  const textColor = seconds % 2 !== 0 ? '#fff' : '#000';
  const backgroundColor = seconds % 2 === 0 ? '#fff' : '#000';
  const style = {
    color: textColor,
    backgroundColor,
  };

  const timerElem = (
    <div className="seconds" style={style}>
      Now is {seconds}
    </div>
  );

  ReactDOM.render(timerElem, rootElem);
};

setInterval(() => renderSeconds(new Date()), 1000);
