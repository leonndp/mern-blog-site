import React from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {
	render() {
		return (
			<div className="navbar">
				<Link className="navbar__link navbar__link--header" to="/"><strong>&#60;/&#62; Blog Site</strong></Link>
				<Link className="navbar__link" to="/">Home</Link>
				<Link className="navbar__link" to="/new">New Post</Link>
			</div>
		)
	}
}