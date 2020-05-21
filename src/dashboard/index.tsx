import React from 'react';
import {
  Navbar, Nav, Form, FormControl, Button,
} from 'react-bootstrap';

import { Link } from 'react-router-dom';

import { Title } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    </Form>

  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
    </Nav>
 </Navbar.Collapse>
</Navbar>    </>
  );
};

export default Dashboard;
