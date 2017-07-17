"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link; 
var voter = require('../voter'); 


var CourseList = React.createClass({
	propTypes: {
		courses: React.PropTypes.array.isRequired
	},



	render: function() {
		var createCourseRow = function(course) {
			return (
				<tr key = {course.id}>
				<td><a href={course.watchHref}>Watch</a></td>
				<td>{course.title}</td>
				<td>{course.author.name}</td>
				<td>{course.category}</td>
				<td>{course.length}</td>
				<td>{}</td>
				</tr>	
				);
		};
		return (
			<div>
				<table className='table'>
					<thead></thead>
						<th>Watch</th>
						<th>Title</th>
						<th>Author</th>
						<th>Category</th>
						<th>Length</th>
					<tbody>
						{this.props.courses.map(createCourseRow, this)}
					</tbody>
				</table>
				<voter />
			</div>
		);
	}
});

module.exports = CourseList;

//why use 'this' as argument in createCourseRow?