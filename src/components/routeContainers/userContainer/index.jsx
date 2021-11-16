import React from 'react';
import HeaderUser from '../../user/base/header/HeaderUser';
import FooterUser from '../../user/base/footer/FooterUser';
import Login from '../../auth/login/Login';
import LoginPassword from '../../auth/login/LoginPassword';
import { Route } from 'react-router-dom';
const UserContainer = () => {
	return (
		<React.Fragment>
			<HeaderUser />
			<Route path='/auth' exact component={Login} />
			<Route path='/auth/password' exact render={(props) => <LoginPassword {...props} />} />
			<FooterUser />
		</React.Fragment>
	);
};

export default UserContainer;
