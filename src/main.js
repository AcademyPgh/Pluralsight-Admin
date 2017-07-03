$ = jQuery = require('jquery');
var React = require('react');
var Home = require('./components/homePage');

var About = require('./components/about/aboutPage')//hardcode, without the react-router library

React.render(<Home />, document.getElementById('app'));
