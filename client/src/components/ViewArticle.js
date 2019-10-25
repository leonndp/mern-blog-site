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
		axios.get(`https://${window.location.hostname}/articles/${this.props.match.params.id}`)
			.then(res => {
				this.setState({
					title: res.data.title,
					createdAt: res.data.createdAt,
					image: res.data.image,
					content: res.data.content
				})
			})
			.catch(err => {
				console.log(err);
			})
	}

	deleteArticle(e) {
		axios.delete(`https://${window.location.hostname}/articles/${this.props.match.params.id}`)
			.then(res => console.log(res.data));

		window.location = '/';
	}

	render() {
		return (
			<div className="wrapper">
				<h1 className="article-title">{this.state.title}</h1>
				<div className="body-border">
					<img className="article-body__image" src={this.state.image} />
					<p className="article-body__date">{moment(this.state.createdAt.substring(0,10)).format("MMM DD YYYY")}</p>
					<p className="article-body__content">{this.state.content}</p>
					<div className="article-body__buttons">
						<Link className="btn btn--orange" to={"/edit/"+this.props.match.params.id}>Update Article</Link>
						<a className="btn btn--red" href="#" onClick={this.deleteArticle}>Delete Article</a>
					</div>
				</div>
			</div>
		)
	}
}