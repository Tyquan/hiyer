import React from 'react';
import { Link } from 'react-router-dom';

const StaticNavStyles = {
	container: {
		width: "100%",
		padding: "1%",
		display: "flex"
	},
	nav: {
		display: "flex"
	},
	navy: {
		display: "flex"
	},
	a: {
		margin: "0 5px",
	    padding: "5px 15px",
	    borderRadius: "3px 3px 0 0",
	    textDecoration: "none"
	}
};

const StaticNav = () => {
	const { container, nav, navy, a } = StaticNavStyles;
	return (
		<div style={container}>
			<div className="container">
				<div>
					<h1>Hiyer</h1>
				</div>
				<div>
					<nav style={navy}>
						<p><Link to='/findJobs' style={a}>Find Jobs</Link></p>
						<p><Link to='/employers' style={a}>Employers</Link></p>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default StaticNav;