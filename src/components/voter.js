"use strict";

var React = require('react'); 

module.exports = React.createClass({
	render: function() {
		return (
			<button className='btn btn-default' onClick={this.props.onClick}>
				Upvote
			</button>
		);
	}
});	