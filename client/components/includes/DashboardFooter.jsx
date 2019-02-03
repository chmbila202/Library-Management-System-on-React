import React from 'react';

const DashboardFooter = () => {
	return (
		<footer className="page-footer center">
			<div className="footer-copyright">
				<div className="container">
					&copy; { new Date().getFullYear() } Copyright{ ' ' }
					<a className="grey-text text-lighten-3"
						href="https://www.facebook.com/bilal9978">
						<b>Muhammad Bilal Sadiq</b><br></br>
						
					</a>
				</div>
			</div>
		</footer>
	);
};

export default DashboardFooter;
