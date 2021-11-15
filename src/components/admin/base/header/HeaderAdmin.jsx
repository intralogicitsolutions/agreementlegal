import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../../../assets/images/logo.png';
import '../../../../styles/header.scss';
const NavbarMain = () => {
	return (
		<Navbar light expand='md' fixed='top'>
			<NavbarBrand href='/'>
				<img src={logo} />
			</NavbarBrand>
			<Nav className='ml-auto ' navbar>
				<NavItem style={{ background: '#1660CF' }}>
					<NavLink to='/auth' className='nav_anchor nav-link text-white'>
						Admin
					</NavLink>
				</NavItem>
			</Nav>
		</Navbar>
	);
};
export default NavbarMain;
