const router = require('express').Router();
let Article = require('../models/article.model');

// Index
router.route('/').get((req, res) => {
	Article.find()
		.then(articles => res.json(articles))
		.catch(err => res.status(400).json(`Error: ${err}`));
});

// Create
router.route('/add').post((req, res) => {
	const title = req.body.title;
	const image = req.body.image;
	const content = req.body.content;

	const newArticle = new Article({
		title,
		image,
		content
	})

	newArticle.save()
		.then(() => res.json('Article added!'))
		.catch(err => res.status(400).json(`Error: ${err}`))
})

// Read
router.route('/:id').get((req, res) => {
	Article.findById(req.params.id)
		.then(article => res.json(article))
		.catch(err => res.status(400).json(`Error: ${err}`))
})

// Update
router.route('/:id').put((req, res) => {
	Article.findById(req.params.id)
		.then(article => {
			article.title = req.body.title;
			article.image = req.body.image;
			article.content = req.body.content;

			article.save()
				.then(() => res.json('Article updated!'))
				.catch(err => res.status(400).json(`Error: ${err}`))
		})
})

// Destroy
router.route('/:id').delete((req, res) => {
	Article.findByIdAndDelete(req.params.id)
	.then(() => res.json('Article deleted.'))
	.catch(err => res.status(400).json(`Error: ${err}`))
})


module.exports = router;