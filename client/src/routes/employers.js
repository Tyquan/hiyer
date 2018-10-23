import React from 'react';
import StaticNav from '../components/navs/StaticNav';
import { Link } from 'react-router-dom';

const Employers = () => {
	return (
		<div>
			<StaticNav />
			<div className="container-fluid">
				<h1>Employers</h1>
				<button className="btn btn-primary"><Link to='/signup'>Signup</Link></button>
			</div>
		</div>
	);
};

export default Employers;