import React from 'react';
import WelcomeModal from '../components/WelcomeModal';
import Auth from '../components/layout/Auth';

const Home = () => (
  <div>
    <Auth>
      <WelcomeModal />
    </Auth>
  </div>
);

export default Home;
