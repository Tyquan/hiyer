import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

// Routes
import Home from './home';
import FindJobs from './findJobs';
import Employers from './employers';

import Signup from './employer/auth/signup';

export const history = createHistory();

export default () => (
	<Router history={history}>
		<Switch>
			<Route path="/" exact={true} component={Home} />
			<Route path="/findJobs" exact={true} component={FindJobs} />
			<Route path="/employers" exact={true} component={Employers} />
			<Route path="/signup" exact={true} component={Signup} />
		</Switch>
	</Router>
);