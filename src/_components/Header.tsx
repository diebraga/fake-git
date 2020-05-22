import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import {
  Navbar, Nav, Form, FormControl,
} from 'react-bootstrap';
import { Wrap } from './styles';

const Dashboard: React.FC = () => (
    <>
    <Wrap>
      <Navbar bg="dark" variant="dark" expand="lg">
      <AiOutlineGithub size={50} color="#fff" />
      <Form>
      <FormControl placeholder="Search or jump to..." />
      </Form>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Pull requests</Nav.Link>
      <Nav.Link href="#pricing">Issues</Nav.Link>
      <Nav.Link href="#deets">Market place</Nav.Link>
      <Nav.Link href="#memes">
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
