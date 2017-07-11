"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var AuthorApi = require('../api/authorApi');
var ActionTypes = require('../constants/actionTypes');

var AuthorActions = {
	creatAuthor: function(author) {
		var newAuthor = AuthorApi.saveAuthor(author); //use callbacks or promises to handle the response from the web API

		//Tells all the stores that an Author was created
		Dispatcher.dispatch({
			actionType: ActionTypes.CREATE_AUTHOR, 
			author: newAuthor
		});
	}
};

module.exports = AuthorActions; 