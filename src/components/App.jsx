import React from 'react';
import {List} from 'immutable';

const pair = List.of('vote1', 'vote2');

export default React.createClass({
  render: function() {
    return this.props.children;
  }
});