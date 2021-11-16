import UserContainer from '../components/routeContainers/userContainer';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AdminContainer from '../components/routeContainers/adminContainer';
const RoutesConfig = () => {
	return (
		<div className='routeComponent'>
			<Switch>
				<Route path='/admin' component={AdminContainer} />
				<Route component={UserContainer} />
			</Switch>
		</div>
	);
};

export default RoutesConfig;
