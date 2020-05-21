import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import { Header, RepoInfo, Issues } from './styles';


export const SignIn: React.FC = () => {
  return (
  <>
  <Header>

    <Link to="/">
    <FiChevronLeft size={20}/>
      Back
    </Link>
  </Header>

  </>
  );
};


export default Repository;
