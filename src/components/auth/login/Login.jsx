import React, { useState } from 'react';
import '../../../styles/auth.scss';
import { Redirect } from 'react-router-dom';
const Login = () => {
	const [auth, setAuth] = useState(false);
	return (
		<React.Fragment>
			{auth && <Redirect to='/auth/password' />}
			<div className='main-body'>
				<div className='wrapper'>
					<h1 className='heading'>My Account</h1>
					<form action method='POST'>
						<div className='form-group'>
							<button type='button' className='login-btn'>
								<i className='fab fa-google' />
								<span className='btn-text'>Sign up / Log In with Google</span>
							</button>
						</div>
						<h2 className='break-line'>
							<span>OR</span>
						</h2>
						<div className='form-group'>
							<div className='row'>
								<input className='input-label' type='text' name='fancy-text' id='fancy-text' />
								<label htmlFor='fancy-text' className='label-css'>
									Email
								</label>
							</div>
						</div>
						<div className='form-group'>
							<button
								type='submit'
								className='submit'
								onClick={(e) => {
									e.preventDefault();
									setAuth(true);
								}}>
								Proceed
							</button>
						</div>
					</form>
				</div>
				<p className='notes'>Terms and Conditions Apply</p>
			</div>
		</React.Fragment>
	);
};

export default Login;
