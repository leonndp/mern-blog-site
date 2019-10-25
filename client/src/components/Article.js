import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const charLimit = 100;

const Article = props => (
	<div className="article-link">
		<img className="article-link__thumbnail" src={props.article.image} />

		<div className="article-link__body">
			<h3 className="article-link__title">{props.article.title}</h3>
			<p className="article-link__date">{moment(props.article.createdAt.substring(0,10)).format("MMM DD YYYY")}</p>
			<p className="article-link__content">{props.article.content.length > charLimit ? props.article.content.substring(0,charLimit)+'...' : props.article.content}</p>
			<Link className="btn btn--purple" to={'/view/'+props.article._id}>Read More</Link>
		</div>
	</div>
)

export default Article;