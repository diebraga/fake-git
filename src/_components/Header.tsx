import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import {
  Navbar, Nav, Form, FormControl,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Dashboard: React.FC = () => (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
      <AiOutlineGithub size={50} color="#fff" />
      <Form>
      <FormControl placeholder="Search or jump to..." />
      </Form>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
  </Navbar>

  </>
);

export default Dashboard;
