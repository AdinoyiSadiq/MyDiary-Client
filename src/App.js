import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './styles/styles.scss';
import authenticate from './containers/hoc/authenticate';
import Home from './views/Home';
import Signin from './views/Signin';
import Signup from './views/Signup';
import Entries from './views/Entries';

const Main = () => (
  <div>
    <Route path="/main/entries" component={Entries} />
  </div>
);

const Auth = () => (
  <div>
    <Route path="/auth/signup" component={Signup} />
    <Route path="/auth/signin" component={Signin} />
  </div>
);

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/auth" component={Auth} />
      <Route path="/main" component={authenticate(Main)} />
    </div>
  </BrowserRouter>
);

export default App;
