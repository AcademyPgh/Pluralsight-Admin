"use strict";

var React = require('react');

var AuthorForm = React.createClass({

	render: function() {
		return (
			<form>
				<h1>Manage Author</h1>
				<label htmlFor='firstName'>First Name</label>
				<input type='text'
					name='firstName'
					className='form-control'
					placeholder='First Name'
					ref='firstName'
					value='' />
				<br />

				<label htmlFor='lastName'>Last Name</label>
				<input type='text'
					name='firstName'
					className='form-control'
					placeholder='Last Name'
					ref='lasttName'
					value='' />
				<br />


				<input type='submit'
					className='btn btn-default'
					value='Save' />
				<br />
			</form>
		);
	}
});

module.exports = AuthorForm;