import React, { useEffect, useRef, useState } from 'react';

import '../../../styles/auth.scss';
import classNames from 'classnames';
import { Auth } from 'aws-amplify';
import { useLocation, Redirect } from 'react-router-dom';

const LoginPassword = () => {
	const state = useLocation().state;
	const pwd = useRef(null);
	useEffect(() => {
		let mount = true;

		if (mount) {
			let mailState = state.email;
			if (!mailState) setMail(undefined);
			else setMail(mailState);
		}
		return () => {
			mount = false;
		};
	}, []);

	const [email, setMail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState({ valid: true, msg: '' });
	const [isAuth, setAuth] = useState(false);
	function validateForm(e) {
		e.preventDefault();
		// if (!error.valid) return;
		Auth.signIn(email, password) //'admin@admin.com', 'password'
			.then((res) => {
				// console.log(res);
				// Auth.currentSession().then((currentUser) => console.log({ currentUser }));
				setAuth(true);
			})
			.catch((e) => {
				setError({ valid: false, msg: 'Invalid Credentials' });
				console.log({ e });
			});
	}

	// password validations
	// useEffect(() => {
	// 	let mount = true;
	// 	if (mount) validatePassword();
	// 	return () => {
	// 		mount = false;
	// 	};
	// }, [password]);
	const pattern = {
		charLength: function () {
			if (password.length >= 7) return true;
			else return false;
		},
		lowercase: function () {
			var regex = /^(?=.*[a-z]).+$/; // Lowercase character pattern

			if (regex.test(password)) return true;
			else return false;
		},
		uppercase: function () {
			var regex = /^(?=.*[A-Z]).+$/; // Uppercase character pattern

			if (regex.test(password)) return true;
			else return false;
		},
		special: function () {
			var regex = /^(?=.*[0-9_\W]).+$/; // Special character or number pattern

			if (regex.test(password)) return true;
			else return false;
		},
	};

	// Listen for keyup action on password field

	function validatePassword(e) {
		// setPassword(e.target.value);
		if (!pattern.charLength())
			return setError({ valid: false, msg: 'Must be at least 8 characters long' });
		if (!pattern.lowercase())
			return setError({ valid: false, msg: 'Must contain a lowercase letter' });
		if (!pattern.uppercase())
			return setError({ valid: false, msg: 'Must contain an uppercase letter' });
		if (!pattern.uppercase())
			return setError({ valid: false, msg: 'Must contain a number or special character' });
		if (pattern.charLength() && pattern.lowercase() && pattern.special() && pattern.uppercase())
			return setError({ valid: true, msg: '' });
	}

	return (
		<React.Fragment>
			{!state?.email && <Redirect to='/auth' />}
			{isAuth && <Redirect to='/dashboard' />}
			<div className='main-body'>
				<div className='wrapper'>
					<h1 className='heading'>Log In</h1>
					<form action='' onSubmit={validateForm}>
						<div className='form-group'>
							<div className='row'>
								<input
									className={classNames('input-label', { error: !error.valid })}
									type='password'
									name='password'
									id='pwd'
									onKeyUp={(e) => setPassword(e.target.value)}
									defaultValue={password}
									ref={pwd}
								/>
								<label htmlFor='fancy-text' className='label-css'>
									Password
								</label>
								{!error.valid && <small className='errorMsg'>{error.msg}</small>}
							</div>
						</div>
						<div className='form-group'>
							<button type='submit' className='submit'>
								Login
							</button>
						</div>
					</form>
				</div>
				<p className='notes'>Terms and Conditions Apply</p>
			</div>
		</React.Fragment>
	);
};

export default LoginPassword;
