import React from 'react';
import axios from 'axios';

export default class NewArticle extends React.Component {
	constructor(props){
		super(props);

		this.onChangeTitle = this.onChangeTitle.bind(this);
		this.onChangeImage = this.onChangeImage.bind(this);
		this.onChangeContent = this.onChangeContent.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			title:'',
			image:'',
			content:''
		}
	}

	onChangeTitle(e) {
		this.setState({
			title: e.target.value
		});
	}

	onChangeImage(e) {
		this.setState({
			image: e.target.value
		});
	}
	
	onChangeContent(e) {
		this.setState({
			content: e.target.value
		});
	}

	onSubmit(e) {
		e.preventDefault();

		const article = {
			title: this.state.title,
			image: this.state.image,
			content: this.state.content
		}

		console.log(article);

		axios.post(`https://${window.location.hostname}/articles/add`, article)
			.then(res => console.log(res.data));

		window.location = '/';
	}

	render() {
		return (
			<div className="wrapper">
				<div className="body-border">
					<h1 className="title">New Post</h1>
					<form className="article-form" onSubmit={this.onSubmit}>
						<div className="article-form__group">
							<label className="article-form__label">Title: </label>
							<input 
								className="article-form__input"
								type='text' 
								maxLength="50"
								value={this.state.title} 
								onChange={this.onChangeTitle}
								required
								/>
						</div>
						<div className="article-form__group">
							<label className="article-form__label">Image: </label>
							<input
								className="article-form__input" 
								type='text' 
								value={this.state.image}
								onChange={this.onChangeImage}
								required
								/>
						</div>
						<div className="article-form__group">
							<label className="article-form__label">Content: </label>
							<textarea
								className="article-form__input article-form__input--large" 
								value={this.state.content}
								onChange={this.onChangeContent}
								required
								/>
						</div>
						<div>
							<input className="btn btn--purple" type="submit" value="Submit" />
						</div>
					</form>
				</div>
			</div>
		)
	}
}