import React from 'react';

import { Route, Redirect, Switch } from 'react-router-dom';
import SidebarAdmin from '../../admin/base/sidebar/SidebarAdmin';
import ManageBlog from '../../admin/layouts/blog/ManageBlog';
// import Blog from './Blog';
const Blog = React.lazy(() => import('../../admin/layouts/blog/Blog'));
const HeaderAdmin = React.lazy(() => import('../../admin/base/header/HeaderAdmin'));
const FooterAdmin = React.lazy(() => import('../../admin/base/footer/FooterAdmin'));
const AdminContainer = () => {
	console.log('admin route');
	return (
		<React.Fragment>
			<HeaderAdmin />
			{/* <SidebarAdmin /> */}
			<div style={{ marginTop: '100px' }}>
				<Route path='/admin/manage-blog' component={ManageBlog} />
				<Route path='/admin/blog' component={Blog} />
			</div>
			<FooterAdmin />
		</React.Fragment>
	);
};

export default AdminContainer;
