import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<nav className="nav-bar">
			<div className="navbar-wrapper container">
				<Link to='/' className="brand-logo left">
					<img src="/img/emblem_library.png" width="40px" height="50px" />
					GCUF-Library
				</Link>
				<a href="#" data-activates="mobile-demo"
					className="button-collapse right">
					<i className="material-icons">menu</i>
				</a>
				<ul className="right hide-on-med-and-down">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<a href="https://www.facebook.com/bilal9978">About</a>
					</li>
					<li>
						<a href="https://www.facebook.com/bilal9978">FaceBook</a>
					</li>
				</ul>
			</div>
			<ul className="side-nav" id="mobile-demo">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<a href="https://www.facebook.com/bilal9978">About</a>
				</li>
				<li>
					<a href="https://www.facebook.com/bilal9978">Privacy</a>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
