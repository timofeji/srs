import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import App from './containers/AppContainer';
import Leaderboard from './containers/LeaderboardContainer';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <div>
    <App />
    <Leaderboard />
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
