import React from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from 'reactstrap';
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
							<NavLink className='nav_anchor' href='/agreements'>
								All Agreements
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className='nav_anchor' href='/about'>
								About Us
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className='nav_anchor' href='/blogs'>
								Blogs
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className='nav_anchor' href='/pricing'>
								Pricing
							</NavLink>
						</NavItem>
						<NavItem className='active '>
							<NavLink href='/account' className='nav_anchor'>
								My Account
							</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		);
	}
}
