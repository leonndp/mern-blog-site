const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const articleSchema = new Schema({
	title: { type: String, required: true },
	date: {type: Date, required: true },
	image: { type: String, required: false },
	content: { type: String, required: false }
}, {
	timestamps: true
})

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;