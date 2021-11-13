import UserContainer from '../components/routeContainers/userContainer';
import React from 'react';
import { Route } from 'react-router-dom';

const RoutesConfig = () => {
	console.log('route');
	return (
		<div className='routeComponent'>
			<Route component={UserContainer} />
		</div>
	);
};

export default RoutesConfig;
