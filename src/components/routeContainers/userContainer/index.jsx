import React from 'react';
import HeaderUser from '../../user/base/header/HeaderUser';
import FooterUser from '../../user/base/footer/FooterUser';
import Login from '../../auth/login/Login';
import LoginPassword from '../../auth/login/LoginPassword';
import { Route } from 'react-router-dom';
const UserContainer = () => {
	console.log('user container loaded');
	return (
		<React.Fragment>
			<HeaderUser />
			<Route path='/auth' exact component={Login} />
			<Route path='/auth/password' exact component={LoginPassword} />
			<FooterUser />
		</React.Fragment>
	);
};

export default UserContainer;
