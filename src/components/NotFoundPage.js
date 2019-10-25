import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
	<div className="wrapper">
		<div className="not-found">
			<h1 className="not-found__error-header">404</h1>
			<h1 className="not-found__error-subheader">Not Found</h1>
			<Link className="btn btn--purple" to='/'>Go home</Link>
		</div>
	</div>
);

export default NotFoundPage;