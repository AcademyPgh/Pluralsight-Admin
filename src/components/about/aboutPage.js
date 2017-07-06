'use strict';

var React = require('react');

var About = React.createClass({
  statics: {
    willTransitionTo: function (transition, params, query, callback) {
      //if not loggeded_in, require login

      if(!confirm('Are you sure you want to navigate here?')) {
        transition.about();
      } else {
        callback();
      }
    },
    willTransitionFrom: function (transition, component) {
      //if unsaved data, prompt a confirmation to leave

      if(!confirm('Are you sure you want to leave without saving?')) {
        transition.about();
      }
    }
  },
  render: function () {
    return (
      <div>
        <h1>About</h1>
        <p>
          This application uses the following technologies:
          <ul>
            <li>React</li>
            <li>React Router</li>
            <li>Flux</li>
            <li>Node</li>
            <li>Gulp</li>
            <li>Browserify</li>
            <li>Bootstrap</li>
          </ul>
        </p>
      </div>
    );
  }
});

module.exports = About;
