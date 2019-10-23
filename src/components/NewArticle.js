import React from 'react';

export default class NewArticle extends React.Component {
	constructor(props){
		super(props);

		this.onChangeTitle = this.onChangeTitle.bind(this);
		this.onChangeImage = this.onChangeImage.bind(this);
		this.onChangeContent = this.onChangeContent.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			title:'',
			date:new Date(),
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
			date: this.state.date,
			image: this.state.image,
			content: this.state.content
		}

		console.log(article);

		window.location = '/';
	}

	render() {
		return (
			<div>
				<h1>New Post</h1>
				<form onSubmit={this.onSubmit}>
					<div>
						<label>Title: </label>
						<input 
							type='text' 
							value={this.state.title} 
							onChange={this.onChangeTitle}
							required
							/>
					</div>
					<div>
						<label>Image: </label>
						<input 
							type='text' 
							value={this.state.image}
							onChange={this.onChangeImage}
							/>
					</div>
					<div>
						<label>Content: </label>
						<input 
							type='textarea' 
							value={this.state.content}
							onChange={this.onChangeContent}
							required
							/>
					</div>
					<div>
						<input type="submit" value="Create Post" />
					</div>
				</form>
			</div>
		)
	}
}