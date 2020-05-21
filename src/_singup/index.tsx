import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { Wrap, Container } from './styles';


export const SignUp: React.FC = () => {
  return (
    <>
    <Wrap>
    <Container>
      <AiOutlineGithub size={200} color="#3a3a3a"/>
      <form>
      <FormControl placeholder="First and last bame" />
        <FormControl name="email" type="email" placeholder="Your Email" />
        <FormControl name="password" type="password" placeholder="Your Password" />

        <button type="submit">Create account</button>
        <Link to="/" color="#3a3a3a"><p>I already have an ccount</p></Link>
      </form>
      </Container>
      </Wrap>
    </>
  );
};


export default SignUp;
