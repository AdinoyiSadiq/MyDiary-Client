import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

const WelcomeModal = () => (
  <div id="welcomeContent">
      <header>
        <h1>Welcome to MyDiary</h1>
      </header>
      <img id="image" src={logo} alt="logo" />
      <main>
        <div class="clearfix">
            <Link className="welcome-auth" to="/auth/signin">
              <button>Sign In</button>
            </Link>
            <Link className="welcome-auth" to="/auth/signup">
              <button>Sign Up</button>
            </Link>
        </div>
      </main>
    </div>
);

export default WelcomeModal;