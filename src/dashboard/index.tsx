import React from 'react';
import Header from '../_components/Header';
import Footer from '../_components/Footer';
import RepositoriesInfo from '../_components/Repositories';

import { ProfileAndBody } from './styles';


const Dashboard: React.FC = () => (
    <>
    <Header/>
    <ProfileAndBody>
      <div>
        <img src="https://avatars2.githubusercontent.com/u/52054459?s=460&u=d4c512846e9d96d98c2da4eeb1c9906691461b80&v=4" alt="diebraga" />
        <aside>
        <strong>Diego Braga</strong>
        <p>Diebraga</p>
        </aside>
        </div>

        <ul>
          <li>
           <strong>Overview</strong>
          </li>
          <li>
          <strong>Repositories</strong>
          </li>
          <li>
           <strong>Followers</strong>
          </li>
          <li>
           <strong>Following</strong>
          </li>
        </ul>
        <RepositoriesInfo />
    </ProfileAndBody>
    <Footer/>
  </>
);

export default Dashboard;
