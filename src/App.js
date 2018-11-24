import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './styles/styles.scss';
import authenticate from './containers/hoc/authenticate';
import Home from './views/Home';
import Signin from './views/Signin';
import Signup from './views/Signup';
import Entries from './views/Entries';
import SingleEntry from './views/Entry';
import Profile from './views/Profile';
import UpdateEntry from './views/UpdateEntry';
import AddEntry from './views/AddEntry';
import Notifications from './views/Notifications';

const Main = () => (
  <div>
    <Route path="/main/entries" component={Entries} />
    <Route path="/main/entry/:id" component={SingleEntry} />
    <Route path="/main/profile" component={Profile} />
    <Route path="/main/updateEntry" component={UpdateEntry} />
    <Route path="/main/addEntry" component={AddEntry} />
    <Route path="/main/notifications" component={Notifications} />
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
