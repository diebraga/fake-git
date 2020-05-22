import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { FormControl } from 'react-bootstrap';

import { Wrap, Container } from './styles';


export const SignIn: React.FC = () => (
    <>
    <Wrap>
    <Container>
      <AiOutlineGithub size={200} color="#3a3a3a"/>
      <form>
        <FormControl placeholder="Your Email" />
        <FormControl placeholder="Your Password" />

       <button type="submit" ><Link to="/dashboard">Submit</Link></button>
        <Link to="/signUp" color="#3a3a3a"><p>Create Account</p></Link>
      </form>
      </Container>
      </Wrap>
    </>
);


export default SignIn;
