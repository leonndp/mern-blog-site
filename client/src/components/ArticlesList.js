import React from 'react';
import axios from 'axios';
import Article from './Article';

export default class ArticlesList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {articles: []}
	}

	componentDidMount() {
		axios.get(`${location.hostname}:5000/articles/`)
			.then(res => {
				this.setState({ 
					articles: res.data.sort((a,b) => {
						return a.createdAt > b.createdAt ? -1 : a.createdAt < b.createdAt ? 1 : 0;
					})
				})
				console.log(res.data);
			})
			.catch(error => {
				console.log(error);
			})
	}

	articleList() {
		return this.state.articles.map(currentArticle => {
			return <Article article={currentArticle} key={currentArticle._id} />;
		})
	}

	render() {
		return (
			<div className="wrapper">
				<h1>Blog Site</h1>
				<div className="body-border">
					{ this.articleList() }
				</div>
			</div>
		)
	}
}