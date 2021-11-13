import './styles/index.scss';

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RoutesConfig from './routes/Routes';

function App() {
	return (
		<Router>
			<Switch>
				<RoutesConfig />
			</Switch>
		</Router>
	);
}

export default App;
