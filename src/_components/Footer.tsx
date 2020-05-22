import React from 'react';
import {
  Navbar,
} from 'react-bootstrap';
import { WrapFooter } from './styles';

const Footer: React.FC = () => (
    <>
    <WrapFooter>
  <Navbar bg="dark" variant="dark" expand="lg">
    <a href="https://github.com/diebraga">By Diego Braga ❤</a>
  </Navbar>
  </WrapFooter>
  </>
);

export default Footer;
