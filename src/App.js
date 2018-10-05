import React from 'react';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <Header />
  </div>
);

const Header = () => (
  <header>
    <h1>My Contacts</h1>
    <Route exact path="/" component={Welcome} />
    <Route path='/contacts' component={Contacts} />
  </header>
)

const Welcome = () => (
  <h1>Welcome to the best contacts app!</h1>
);

const Contacts = () => (
  <ul>
    <li>Lynn</li>
    <li>I</li>
    <li>My</li>
  </ul>
)

export default App;
