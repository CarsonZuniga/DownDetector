import React from "react";
import {
    Container,
    Row,
    Col,
    Nav,
    NavDropdown,
    Navbar
} from "react-bootstrap/";

import SiteInfo from "./SiteInfo.tsx";

export default class GlobalContext extends React.Component {
    constructor(props:any) {
        super(props);
        this.getRandomNum = this.getRandomNum.bind(this);
    }

    getRandomNum() {
        return 1;
    }
    
    render() {
        const getNavBar = () => {
            return (
                <Navbar bg="light" expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="#home">Down Detector</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Link</Nav.Link>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            );
        }
        return (
        <Container fluid>
            {getNavBar()}
            <SiteInfo></SiteInfo>
        </Container>
        )
    }
}