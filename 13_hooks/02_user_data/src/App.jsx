import React from 'react';
import User from './User';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <div className="page__content">
          <h1>Users</h1>
          <ul className="navigation">
            <li className="navigation__item">
              <a href="/users/github">Github</a>
            </li>
            <li className="navigation__item">
              <a href="/users/facebook">Facebook</a>
            </li>
          </ul>
          <Switch>
            <Route exact path="/">
              <span>Select a user please</span>
            </Route>
            <Route path="/users/:userId">
              <User />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}
