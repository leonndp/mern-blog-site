import React from 'react';
import { Link } from 'react-router-dom';

const Article = props => (
	<div>
		<img src={props.article.image} />
		<h3>{props.article.title}</h3>
		<p>{props.article.createdAt}</p>
		<p>{props.article.content.length > 100 ? props.article.content.substring(0,100)+'...' : props.article.content}</p>
		<Link to={'/view/'+props.article._id}>Read More</Link>
	</div>
)

export default Article;