import React from 'react';
import { MdLocationOn } from 'react-icons/md';
import Header from '../_components/Header';
import Footer from '../_components/Footer';
import RepositoriesInfo from '../_components/Repositories';

import { ProfileAndBody } from './styles';


const Dashboard: React.FC = () => (
    <>
    <Header/>
    <ProfileAndBody>
      <div>
      <a href="https://github.com/diebraga"><img src="https://avatars2.githubusercontent.com/u/52054459?s=460&u=d4c512846e9d96d98c2da4eeb1c9906691461b80&v=4" alt="diebraga" /></a>
        <aside>
        <strong>Diego Braga</strong>
        <p>Diebraga</p>
        <hr/>
        <p>Software Engineer and JavaScript enthusiast.</p>
        <hr/>
        <p><MdLocationOn /> Ireland</p>
        </aside>
        </div>
      <hr/>
        <ul>
          <li>
          <a href="https://github.com/diebraga"><strong>Overview</strong></a>
          </li>
          <li>
          <a href="https://github.com/diebraga?tab=repositories"><strong>Repositories</strong></a>
          </li>
          <li>
          <a href="https://github.com/diebraga?tab=followers"><strong>Followers</strong></a>
          </li>
          <li>
          <a href="https://github.com/diebraga?tab=following"><strong>Following</strong></a>
          </li>
        </ul>
        <hr/>
    </ProfileAndBody>
    <RepositoriesInfo />

    <Footer/>
  </>
);

export default Dashboard;
