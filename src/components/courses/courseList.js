"use strict";

var React = require('react');

var CourseList = React.createClass({
	render: function() {
		return (
			<button className='btn btn-default' onClick={this.props.onClick}>
				Clicker
			</button>
		);
	}
});

module.exports = CourseList;