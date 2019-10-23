import React from 'react';
import axios from 'axios';

export default class ArticleForm extends React.Component {
	constructor(props){
		super(props);

		this.onChangeTitle = this.onChangeTitle.bind(this);
		this.onChangeImage = this.onChangeImage.bind(this);
		this.onChangeContent = this.onChangeContent.bind(this);

		this.state = {
			title:'',
			image:'',
			content:''
		}
	}

	

	render() {
		return (
			<div>
				<form onSubmit={this.props.onSubmit}>
					<div>
						<label>Title: </label>
						<input 
							type='text' 
							maxLength="50"
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
							required
							/>
					</div>
					<div>
						<label>Content: </label>
						<textarea 
							value={this.state.content}
							onChange={this.onChangeContent}
							required
							/>
					</div>
					<div>
						<input type="submit" value="Submit" />
					</div>
				</form>
			</div>
		)
	}
}