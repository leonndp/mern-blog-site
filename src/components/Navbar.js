import React from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {
	render() {
		return (
			<div class="navbar">
				<Link to="/">Blog Site</Link>
				<Link to="/">Home</Link>
				<Link to="/new">New Post</Link>
			</div>
		)
	}
}