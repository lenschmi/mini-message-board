var express = require('express');
var router = express.Router();

// Define list of message
const messages = [
	{
		text: "Hi there!",
		user: "Amando",
		added: new Date()
	},
	{
		text: "Hello World!",
		user: "Charles",
		added: new Date()
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
	messages.push({text: messageText, user: messageUser, added: new Date()});
	res.redirect('/');
});

module.exports = router;
