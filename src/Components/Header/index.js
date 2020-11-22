import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import shoppingCart from '../../images/shopping-cart.svg'
import { withRouter } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <Navbar bg="header_bd1" expand="lg">
                <Navbar.Brand onClick={() => { this.props.history.push('/') }}>SHOP kyr!?</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link onClick={() => { this.props.history.push('/') }}>SHOP</Nav.Link>
                        <Nav.Link onClick={() => { this.props.history.push('/admin/auth') }}>ADMIN</Nav.Link>
                    </Nav>
                    <Nav>
                        <img style={{ width: '22px' }} src={shoppingCart} />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default withRouter(Header)