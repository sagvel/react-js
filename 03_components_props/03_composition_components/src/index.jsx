import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment';
import './styles.scss';

const rootElem = document.querySelector('#root');
const userInfo = {
  name: 'Tom',
  avatarUrl: 'https://avatars.githubusercontent.com/github',
};

function App() {
  return (
    <>
      <Comment
        author={userInfo}
        text="Good job!"
        date={new Date('2019-01-01T11:32:19.566Z')}
      />
    </>
  );
}

ReactDOM.render(<App />, rootElem);
