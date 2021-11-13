import React from 'react';
import '../../../styles/auth.scss';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Helmet, HelmetProvider } from 'react-helmet-async';
const LoginPassword = () => {
	return (
		<React.Fragment>
			<HelmetProvider>
				<div className='main-body'>
					<div className='wrapper'>
						<h1 className='heading'>Log In</h1>
						<form action method='POST'>
							<div className='form-group'>
								<div className='row'>
									<input
										className='input-label'
										type='password'
										name='fancy-text'
										id='fancy-text'
									/>
									<label htmlFor='fancy-text' className='label-css'>
										Password
									</label>
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
			</HelmetProvider>
		</React.Fragment>
	);
};

export default LoginPassword;
