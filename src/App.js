import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/index.scss';
import UserContainer from './components/routeContainers/userContainer';
import AdminContainer from './components/routeContainers/adminContainer';

function App() {
	return (
		<Suspense
			fallback={
				<div>
					<h1>Loading</h1>
				</div>
			}>
			<Router>
				<div className='routeComponent'>
					<Switch>
						<Route path='/admin' component={AdminContainer} />
						<Route component={UserContainer} />
					</Switch>
				</div>
			</Router>
		</Suspense>
	);
}

export default App;
