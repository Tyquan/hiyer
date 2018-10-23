import React from 'react';
import StaticNav from '../components/navs/StaticNav';
import Jobs from '../components/jobs/Jobs';

const Home = () => {
	return (
		<div>
			<StaticNav />
			<div className="container-fluid">
				<SearchJobsFilters />
				<Jobs />
			</div>
		</div>
	);
};

export default Home;