"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var CourseStore = require('../../stores/courseStore');
var CourseList = require('./courseList');
var CourseActions = require('../../actions/courseActions');

var CoursePage = React.createClass({
	getInitialState: function() {
		return {
			courses: CourseStore.getAllCourses()
		};
	},

	_onChange: function() {
		this.setState({ courses: CourseStore.getAllCourses() });
	},

	// handleClick: function() {
	// 	var total = this.state.totalVotes;

	// 	this.setState({
	// 		totalVotes: (total + 1)
	// 	});

	// },

	render: function() {
		return (
			<div>
				<h1>Courses Page</h1>
				<Link to='addCourse' className='btn btn-default'>Add Course</Link>
				<CourseList courses={this.state.courses} />
				
				
			</div>
		);
	}
});

module.exports = CoursePage;

// <button className='btn btn-default' onClick={this.handleClick}>Parent Clicker {this.state.totalVotes}</button>

// <p>{this.state.totalVotes}</p>
		// var totalVotes = 0;
		// in es6: this.handleClick = this.handleClick.bind(this);

