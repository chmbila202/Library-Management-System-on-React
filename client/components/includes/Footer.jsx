import React from 'react';

const Footer = () => {
	return (
		<footer className="page-footer">
			<div className="container">
				<div className="row">
					<div className="col l6 s12">
						<h5 className="white-text">About GCUF-Library</h5>
						<p className="grey-text text-lighten-4">
							GCUF-Library is a simple application that helps manage a library and its processes like
							stocking, tracking and renting books. With this application users are able to find and rent
							books.
						</p>
					</div>
					<div className="col l4 offset-l2 s12">
						<h5 className="white-text">Quick Links</h5>
						<ul>
							<li>
								<a className="grey-text text-lighten-3"
									href="#!">
									F.A.Q
								</a>
							</li>
							<li>
								<a className="grey-text text-lighten-3"
									href="#!">
									Why Us?
								</a>
							</li>
							<li>
								<a className="grey-text text-lighten-3"
									href="https://github.com/chmbila202">
									Contribute on Github
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="footer-copyright">
				<div className="container">
					&copy; { new Date().getFullYear() } Copyright{ ' ' }
					<a className="grey-text text-lighten-3"
						href="https://github.com/chmbila202">
						<b>Muhammad Bilal Sadiq.</b>
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
