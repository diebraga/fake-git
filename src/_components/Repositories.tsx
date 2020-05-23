import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { RepositoriesInfo } from './styles';

const Repositories: React.FC = () => (
    <>
    <RepositoriesInfo>
    <a href="https://github.com/diebraga/go-barber">
        <div>
        <strong>go-barber</strong>
         <p>Fullstack app Node/ React/ React Native</p>
         </div>
      <FiChevronRight size={20}/>
    </a>
    </RepositoriesInfo>
  </>
);

export default Repositories;
