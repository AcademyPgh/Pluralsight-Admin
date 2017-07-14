"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var CourseStore = require('../../stores/authorStore');
var CourseList = require('./courseList');

var CoursePage = React.createClass({
	// getInitialState: function() {
	// 	return {
	// 		authors: AuthorStore.getAllAuthors()
	// 	};
	// },	

	// _onChange: function() {
	// 	this.setState({ authors: AuthorStore.getAllAuthors() });
	// },

	// componentWillMount: function() {
	// 	AuthorStore.addChangeListener(this._onChange); 
	// },

	// componentWillUnmount: function() {
	// 	AuthorStore.removeChangeListener(this._onChange); 
	// },
	getInitialState: function() {

		return {};
	},

	render: function() {
		return (
			<div>
				<h1>Courses Page</h1>
				<Link to='addCourse' className='btn btn-default'>Add Course</Link>
				<p>Be Sure to fix the prop rendering the Courses List</p>
				<CourseList />
			</div>
		);
	}
});

module.exports = CoursePage;

