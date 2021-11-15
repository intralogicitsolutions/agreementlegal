import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../../../assets/images/logo.png';
import '../../../../styles/header.scss';
export default class NavbarMain extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false,
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	}
	render() {
		return (
			<Navbar light expand='md' fixed='top'>
				<NavbarBrand href='/'>
					<img src={logo} />
				</NavbarBrand>
				<NavbarToggler onClick={this.toggle} />
				<Collapse isOpen={this.state.isOpen} navbar>
					<Nav className='ml-auto ' navbar>
						<NavItem>
							<NavLink className='nav_anchor nav-link' to='/agreements'>
								All Agreements
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className='nav_anchor nav-link' to='/about'>
								About Us
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className='nav_anchor nav-link' to='/blogs'>
								Blogs
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className='nav_anchor nav-link' to='/pricing'>
								Pricing
							</NavLink>
						</NavItem>
						<NavItem className='active '>
							<NavLink to='/auth' className='nav_anchor nav-link'>
								My Account
							</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		);
	}
}
