import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { Wrap, Container } from './styles';


export const SignUp: React.FC = () => {
  return (
    <>
    <Wrap>
    <Container>
      <AiOutlineGithub size={200} color="#3a3a3a"/>
      <form>
      <input placeholder="First and last bame" />
        <input name="email" type="email" placeholder="Your Email" />
        <input name="password" type="password" placeholder="Your Password" />

        <button type="submit">Create account</button>
        <Link to="/">I already have an account</Link>
      </form>
      </Container>
      </Wrap>
    </>
  );
};


export default SignUp;
