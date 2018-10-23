import React from 'react';

const SearchJobsFilters = (props) => (
	<div>
		<form className="form">
			<div className="row">
				<div className="col-md-2">
				</div>
				<div className="col-md-3">
					<center>
						<input 
							type="text"
							className="form-control"
							placeholder="Job"
							value={props.name}

						/>
					</center>
				</div>
				<div className="col-md-3">
					<center>
						<input className="form-control" placeholder="City" />
					</center>
				</div>
				<div className="col-md-2">
					<center>
						<button className="btn btn-primary">Search</button>
					</center>
				</div>
				<div className="col-md-2">

				</div>
			</div>
		</form>
	</div>
);

export default SearchJobsFilters;