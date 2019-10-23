import React from 'react';
import { Link } from 'react-router-dom';

const Article = props => (
	<div>
		<img src={props.article.image} />
		<h3>{props.article.title}</h3>
		<p>{props.article.date.toString()}</p>
		<p>{props.article.content.substring(0,100)}...</p>
		<Link to={'/'+props.article._id}>Read More</Link>
	</div>
)

export default Article;