import React from 'react';

import s from './Home.module.css';

import Body from '../../Components/Body/Body';
import Sidebar from '../../Components/Sidebar/Sidebar';

const Home = () => {
  return (
    <div className={s.home}>
      <div className={s.sidebar}>
        <Sidebar />
      </div>
      <div className={s.mainbody}>
        <Body />
      </div>
    </div>
  );
};

export default Home;
