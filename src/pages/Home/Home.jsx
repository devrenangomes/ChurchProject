import React from 'react';
import Hero from '../../components/home/Hero/Hero';
import NoticeBoard from '../../components/home/NoticeBoard/NoticeBoard';
import Cells from '../../components/home/Cells/Cells';
import Schedule from '../../components/home/Schedule/Schedule';

const Home = () => {
  return (
    <div>
      <Hero />
      <NoticeBoard />
      <Cells />
      <Schedule />
    </div>
  );
};

export default Home;
