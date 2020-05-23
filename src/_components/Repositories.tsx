import React from 'react';
import { Link } from 'react-router-dom';
import { RepositoriesInfo } from './styles';

const Repositories: React.FC = () => (
    <>
    <RepositoriesInfo>
      <Link to="/dashboard">
        <div>
          <strong>aaaaaaa</strong>
          <p>aaaaaaaaaaaaaa</p>
        </div>
      </Link>
    </RepositoriesInfo>
  </>
);

export default Repositories;
