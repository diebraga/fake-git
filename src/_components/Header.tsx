import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import {
  Navbar, Nav, Form, FormControl,
} from 'react-bootstrap';
import { Wrap, Div } from './styles';

const Dashboard: React.FC = () => (
    <>
    <Wrap>
      <Navbar bg="dark" variant="dark" expand="lg">
      <AiOutlineGithub size={50} color="#fff" />
      <Form>
      <FormControl placeholder="Search or jump to..." />
      </Form>
      <Div> <Navbar.Toggle aria-controls="responsive-navbar-nav" /></Div>
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="https://github.com/pulls">Pull requests</Nav.Link>
      <Nav.Link href="https://github.com/issues">Issues</Nav.Link>
      <Nav.Link href="https://github.com/marketplace">Market place</Nav.Link>
      <Nav.Link href="https://github.com/explore">
        Explore
      </Nav.Link>

    </Nav>
    <Nav>
    </Nav>
  </Navbar.Collapse>
  </Navbar>
  </Wrap>

  </>
);

export default Dashboard;
