"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var CourseApi = require('../api/CourseApi');
var ActionTypes = require('../constants/actionTypes');

// var AuthorActions = {
// 	createAuthor: function(author) {
// 		var newAuthor = AuthorApi.saveAuthor(author); //use callbacks or promises to handle the response from the

// 		//Tells all the stores that an Author was created
// 		Dispatcher.dispatch({
// 			actionType: ActionTypes.CREATE_AUTHOR, 
// 			author: newAuthor
// 		});
// 	}, 

// 	updateAuthor: function(author) {
// 		var updatedAuthor = AuthorApi.saveAuthor(author);	

// 		Dispatcher.dispatch({
// 			actionType: ActionTypes.UPDATE_AUTHOR, 
// 			author: updatedAuthor
// 		});
// 	}, 

// 	deleteAuthor: function(id) {
// 		AuthorApi.deleteAuthor(id); 

// 		Dispatcher.dispatch({
// 			actionType: ActionTypes.DELETE_AUTHOR, 
// 			id: id
// 		}); 
// 	}
// };

// module.exports = AuthorActions; 