import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const Article = props => (
	<div>
		<img src={props.article.image} />
		<h3>{props.article.title}</h3>
		<p>{moment(props.article.createdAt.substring(0,10)).format("MMM DD YYYY")}</p>
		<p>{props.article.content.length > 100 ? props.article.content.substring(0,100)+'...' : props.article.content}</p>
		<Link to={'/view/'+props.article._id}>Read More</Link>
	</div>
)

export default Article;