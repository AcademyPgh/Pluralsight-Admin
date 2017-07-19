"use strict"; 

var React = require('react');
var CourseTextInput = require('../common/courseTextInput');

var CourseForm = React.createClass({

	render: function() {
		return (
			<form>
				<h1>Edit Course</h1>
					<CourseTextInput 
						name='title'
						label= 'Title'
						placeholder= 'Title'
						value={this.props.title}
						title= {this.props.title}
						author= {this.props.author}
						category= {this.props.category}
						length= {this.props.length}

						onChange={this.props.onChange}
						error= {this.props.error}
					/>
					<CourseTextInput 
						name='author'
						label= 'Author'
						placeholder= 'Author'
						value={this.props.author}
						title= {this.props.title}
						author= {this.props.author}
						category= {this.props.category}
						length= {this.props.length}

						onChange={this.props.onChange}
						error= {this.props.error}
					/>

					<CourseTextInput 
						name='category'
						label= 'Category'
						placeholder= 'Category'
						value={this.props.category}
						title= {this.props.title}
						author= {this.props.author}
						category= {this.props.category}
						length= {this.props.length}

						onChange={this.props.onChange}
						error= {this.props.error}
					/>

					<CourseTextInput 
						name='length'
						label= 'Length'
						placeholder= 'Length'
						value={this.props.length}
						title= {this.props.title}
						author= {this.props.author}
						category= {this.props.category}
						length= {this.props.length}

						onChange={this.props.onChange}
						error= {this.props.error}
					/>

					<submit 
						className='btn btn-default'
						onClick={this.props.onSave} >
						Save
					</submit>
			</form>
		);
	}

});

module.exports = CourseForm; 