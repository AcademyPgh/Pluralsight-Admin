"use strict"; 

var React = require('react');
var Router = require('react-router');
var CourseForm = require('./courseform');
var CourseActions = require('../../actions/courseActions');

var toastr = require('toastr'); 

var ManageCoursePage = React.createClass({
	mixins: [
		Router.Navigation
	],

	getInitialState: function() {
		return {
			course: {
				id: '',
				title: '',
				value: '',
				author: '',
				category: '',
				length: ''
			},
			error: {},
			dirty: false

		};
	},

	saveCourse: function(event) {
		event.preventDefault(); // prevets button from actually submitting

		// if form is valid 

		if (this.state.course.id) {
			// update
		}
		else {
			//create 
			CourseActions.createCourse(this.state.course);
		}

		this.setState({dirty: false});
		toastr.success('Course Saved');
		this.transitionTo('courses');
	},

	setCourseState: function(event) {
		this.setState({ dirty: true }); 
		var field = event.target.name; 
		var value = event.target.value;
		this.state.course[field] = value;
		this.setState({ course: this.state.course});
		return this.setState({ course: this.state.course});

	},

	render: function() {
		return (
			<CourseForm 
				title={this.state.title}
				onChange={this.setCourseState}
				onSave={this.saveCourse}
			/> 
		);
	}

});

module.exports = ManageCoursePage;