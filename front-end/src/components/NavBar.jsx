import { React, Component } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import Adnovum_logo from '../static/img/Adnovum_Favicon.jpg'
export default class NavBar extends Component {
    render() {
        return (
            <Navbar expand="lg" className="bg-body-tertiary" style={{ color: "red" }}>
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={Adnovum_logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Adnovum User Service
                    </Navbar.Brand>
                    <Nav className='me-auto'>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#pricing">About</Nav.Link>
                    </Nav>
                    <Navbar.Collapse id="basic-navbar-nav" class="navbar-right">
                        <Nav className="me-auto">
                            <NavDropdown title="User" id="basic-nav-dropdown" align="">
                                <NavDropdown.Item href="https://operation-diet-coke-delta-squad/testauth?logout">
                                    Log Out
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }

}