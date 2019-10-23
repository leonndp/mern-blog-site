import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import moment from 'moment';

export default class ViewArticle extends React.Component {
	constructor(props){
		super(props);

		this.deleteArticle = this.deleteArticle.bind(this);

		this.state = {
			title: '',
			createdAt: '',
			image: '',
			content: ''
		}
	}

	componentDidMount() {
		axios.get(`http://localhost:5000/articles/${this.props.match.params.id}`)
			.then(res => {
				this.setState({
					title: res.data.title,
					createdAt: res.data.createdAt,
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
				<p>{moment(this.state.createdAt.substring(0,10)).format("MMM DD YYYY")}</p>
				<img src={this.state.image} />
				<p>{this.state.content}</p>
				<Link to={"/edit/"+this.props.match.params.id}>Update Article</Link>
				<a href="#" onClick={this.deleteArticle}>Delete Article</a>
			</div>
		)
	}
}