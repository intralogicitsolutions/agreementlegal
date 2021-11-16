import React, { useEffect } from 'react';
import './FooterUser.scss';
import logo from '../../../../assets/images/logoWhite.png';
import { Link } from 'react-router-dom';
import fb from '../../../../assets/icons/fb.png';
import tw from '../../../../assets/icons/tw.png';
import ig from '../../../../assets/icons/ig.png';
const FooterUser = () => {
	return (
		<footer className='site-footer '>
			{/* <div className='container'> */}
			<div className='row col-12 footer-main'>
				<div className='col-xs-12 col-sm-6 col-md-6 col-lg-6'>
					<p className='text-justify'>
						<img src={logo} />
					</p>
					<div className='copyright-text mt-3 mb-3'>All rights reserved 2021</div>
					<img src={ig} alt='Instagram' className='mx-2' /> <img src={tw} className='mx-2' />
					<img src={fb} className='mx-2' />
				</div>
				<div className='col-xs-12 col-sm-3 col-md-3 col-lg-3'>
					<ul className='footer-links'>
						<li>
							<Link to='/agreements'>Agreements</Link>
						</li>
						<li>
							<Link to='/pricing'>Pricing</Link>
						</li>
						<li>
							<Link to='/account'>My Account</Link>
						</li>
						<li>
							<Link to='/blogs'>Blogs</Link>
						</li>
					</ul>
				</div>
				<div className='col-xs-12 col-sm-3 col-md-3 col-lg-3'>
					<ul className='footer-links'>
						<li>
							<a href='/contact'>Contact Us</a>
						</li>
						<li>
							<a href='/faq'>FAQs</a>
						</li>
						<li>
							<a href='/privacypolicy'>Privacy Policy</a>
						</li>
						<li>
							<a href='/termsandconditions'>Terms and Conditions</a>
						</li>
					</ul>
				</div>
				{/* </div> */}
			</div>
		</footer>
	);
};

export default FooterUser;
