import React from 'react';
import axios from 'axios';

class Jobs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			jobs: []
		};
	}
	componentDidMount(){
		axios.get('http://localhost:3000/api/jobs')
			.then((res) => {
				console.log(res);
				this.setState({

					jobs: res.data
				});
			})
			.catch();
	}
	render(){
		return (
			<div>
				<ul>
					{this.state.jobs.map((job) => {
						<li>{job.title}</li>
					})}
				</ul>
			</div>
		);
	}
}

export default Jobs;