import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class ViewArticle extends React.Component {
	constructor(props){
		super(props);

		this.deleteArticle = this.deleteArticle.bind(this);

		this.state = {
			title: '',
			date: '',
			image: '',
			content: ''
		}
	}

	componentDidMount() {
		axios.get(`http://localhost:5000/articles/${this.props.match.params.id}`)
			.then(res => {
				this.setState({
					title: res.data.title,
					date: new Date(res.data.date).toString(),
					image: res.data.image,
					content: res.data.content
				})

				console.log(res);
			})
			.catch(err => {
				console.log(err);
			})
	}

	deleteArticle(e) {
		axios.delete(`http://localhost:5000/articles/${this.props.match.params.id}`)
			.then(res => console.log(res.data));

		window.location = '/';
	}

	render() {
		return (
			<div>
				<h1>{this.state.title}</h1>
				<p>{this.state.date}</p>
				<img src={this.state.image} />
				<p>{this.state.content}</p>
				<Link to={this.props.match.params.id+"/edit"}>Update Article</Link>
				<a href="#" onClick={this.deleteArticle}>Delete Article</a>
			</div>
		)
	}
}