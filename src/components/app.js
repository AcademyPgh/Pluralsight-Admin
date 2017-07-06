/* eslint-disable strict */  //This disables the linter check so that we can use the global jQuery variable; 

var React = require('react');
var Header = require('./common/header.js');
var RouteHandler = require('react-router').RouteHandler;
$ = jQuery = require('jquery');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <Header />
        <div className='container-fluid'>
          <RouteHandler />
        </div>
      </div>
    );
  }
});

module.exports = App; 