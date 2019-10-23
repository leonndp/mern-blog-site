import React from 'react';
import axios from 'axios';

export default class EditArticle extends React.Component {
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

	componentDidMount(){
		console.log(this.props.match.params);
		axios.get(`http://localhost:5000/articles/${this.props.match.params.id}`)
			.then(res => {
				this.setState({
					title: res.data.title,
					date: new Date(res.data.date),
					image: res.data.image,
					content: res.data.content
				})
			})
			.catch(err => {
				console.log(err);
			})
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

		axios.put(`http://localhost:5000/articles/${this.props.match.params.id}`, article)
			.then(res => console.log(res.data));

		window.location = `/${this.props.match.params.id}`;
	}

	render() {
		return (
			<div>
				<h1>Edit Post</h1>
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
						<input type="submit" value="Edit Post" />
					</div>
				</form>
			</div>
		)
	}
}