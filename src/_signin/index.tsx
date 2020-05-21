import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { Wrap, Container } from './styles';


export const SignIn: React.FC = () => {
  return (
    <>
    <Wrap>
    <Container>
      <AiOutlineGithub size={200} color="#3a3a3a"/>
      <form>
        <input name="email" type="email" placeholder="Your Email" />
        <input name="password" type="password" placeholder="Your Password" />

        <button type="submit">Submit</button>
        <Link to="/signUp">Create Account</Link>
      </form>
      </Container>
      </Wrap>
    </>
  );
};


export default SignIn;
