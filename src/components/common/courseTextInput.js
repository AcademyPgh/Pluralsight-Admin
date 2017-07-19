 "use strict";

var React = require('react');

var CourseTextInput = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired,
		author: React.PropTypes.string.isRequired,
		category: React.PropTypes.string.isRequired,
		length: React.PropTypes.string.isRequired, 
		label: React.PropTypes.string.isRequired,
		onChange: React.PropTypes.func.isRequired, 
		placeholder: React.PropTypes.string, 
		value: React.PropTypes.string, 
		error: React.PropTypes.string
	},

	render: function() {
		var wrapperClass = 'form-group';
		if (this.props.error && this.props.error.length > 0) {
			wrapperClass += ' ' + 'has-error'; 
		} 

		return (
			<div className={wrapperClass}>
				<label htmlFor={this.props.title}>{this.props.label}</label>
				<div className={'field'}>
					<input type='text'
						name={this.props.name}
						title={this.props.title}
						author={this.props.author}
						category={this.props.category}
						length={this.props.length}
						className='form-control'
						placeholder={this.props.placeholder}
						ref={this.props.title}
						value={this.props.value}

						onChange={this.props.onChange} />
					<div className='input'>{this.props.error}</div>
				</div>
			</div>
		);
	}
});

module.exports = CourseTextInput;