import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './components/Voting';

const pair = ['vote1', 'vote2'];

ReactDOM.render(
  <Voting pair={pair} hasVoted="vote1" winner="vote2"/>,
  document.getElementById('app')
);