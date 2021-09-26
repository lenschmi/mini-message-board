var express = require('express');
var router = express.Router();
const { DateTime } = require("luxon");

// Define list of message
const messages = [
	{
		text: "Click 'Add Message' to join the conversation!",
		user: "Admin",
		added: DateTime.fromJSDate(new Date()).toLocaleString(DateTime.DATE_MED)
	},
	{
		text: "Welcome to the Mini Message Board!",
		user: "Admin",
		added: DateTime.fromJSDate(new Date()).toLocaleString(DateTime.DATE_MED)
	}
];

// GET home page
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Mini Message Board', messages: messages });
});

// GET new message
router.get('/new', function(req, res, next) {
	res.render('form');
});

// POST new message
router.post('/new', function(req, res, next) {
	let messageText = req.body.message;
	let messageUser = req.body.author;	
	messages.unshift({text: messageText, user: messageUser, added: DateTime.fromJSDate(new Date()).toLocaleString(DateTime.DATE_MED)});
	res.redirect('/');
});

module.exports = router;
