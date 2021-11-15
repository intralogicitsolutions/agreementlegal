import React, { useEffect } from 'react';
import './FooterAdmin.scss';
import logo from '../../../../assets/images/logoWhite.png';
import { Link } from 'react-router-dom';
import fb from '../../../../assets/icons/fb.png';
import tw from '../../../../assets/icons/tw.png';
import ig from '../../../../assets/icons/ig.png';
const FooterAdmin = () => {
	return (
		<footer className='site-footer '>
			{/* <div className='container'> */}
			<div className=' footer-main'>
				<div className='row col-12'>
					<div className='col-sm-6 col-xs-12 col-md-6 col-lg-6'>
						<p className='text-justify'>
							<img src={logo} />
						</p>
						<div className='copyright-text mt-3 mb-3'>All rights reserved 2021</div>
					</div>

					<div className='col-sm-6 col-xs-12 col-md-6 col-lg-6'>
						<div className='social_icons text-right'>
							<img src={ig} alt='Instagram' className='mx-2' /> <img src={tw} className='mx-2' />
							<img src={fb} className='mx-2' />
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default FooterAdmin;
