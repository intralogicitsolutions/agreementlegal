import React from 'react';
import './breadCrumbHeader.scss';
const BreadCrumbHeader = ({ header }) => {
	return (
		<div className='container pb-5 pt-5'>
			<div className='breadcrumb_header mb-2'>{header}</div>
			<small className='breadcrumb_path '>Admin Dashboard / Manage Blogs</small>
		</div>
	);
};

export default BreadCrumbHeader;
