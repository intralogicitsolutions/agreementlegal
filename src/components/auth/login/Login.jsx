import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import '../../../styles/auth.scss';
import { Redirect } from 'react-router-dom';
const Login = () => {
	const [auth, setAuth] = useState(false);
	const [email, setMail] = useState('');
	const [error, setError] = useState({ valid: true, msg: '' });

	function validateForm(e) {
		e.preventDefault();

		if (!email.length) return setError({ ...error, valid: false, msg: 'Email is required' });

		const pattern =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		const test = pattern.test(String(email).toLowerCase());
		if (!test) setError({ ...error, valid: false, msg: 'Please Enter a valid Email Address ' });
		else return setAuth(true);
	}

	return (
		<React.Fragment>
			{auth && <Redirect to={{ pathname: '/auth/password', state: { email } }} />}
			<div className='main-body'>
				<div className='wrapper'>
					<h1 className='heading'>My Account</h1>
					<form action='' onSubmit={validateForm}>
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
								<input
									// className='input-label'
									className={classNames('input-label', { error: !error.valid })}
									type='text'
									name='fancy-text'
									id='fancy-text'
									defaultValue={email}
									onChange={(e) => setMail(e.target.value)}
								/>
								<label htmlFor='fancy-text' className='label-css'>
									Email
								</label>
								{!error.valid && <small className='errorMsg'>{error.msg}</small>}
							</div>
						</div>
						<div className='form-group'>
							<button type='submit' className='submit'>
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
