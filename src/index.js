import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Amplify } from 'aws-amplify';
import config from './config';

Amplify.configure({
	Auth: {
		mandatorySignIn: true,
		region: config.cognito.REGION,
		userPoolId: config.cognito.USER_POOL_ID,
		identityPoolId: config.cognito.IDENTITY_POOL_ID,
		userPoolWebClientId: config.cognito.APP_CLIENT_ID
	},
	API: {
		endpoints: [
			{
				name: "admin",
				endpoint: new URL("/admin", config.apiGateway.URL).toString(),
				region: config.apiGateway.REGION
			},
		]
	}
});



ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root'),
);
