import React from 'react';
import { Route, Link } from 'react-router-dom';

const App = () => (
  <div>
    <Header />
  </div>
);

const Header = () => (
  <header>
    <h1>My Contacts</h1>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/contacts'>Contacts</Link></li>
      </ul>
    </nav>
    <Route exact path="/" component={Welcome} />
    <Route path='/contacts' component={Contacts} />
  </header>
)

const Welcome = () => (
  <h1>Welcome to the best contacts app!</h1>
);

const Contacts = ({ match }) => (
  <div>
    <ul>
      <li><Link to='/contacts/lynn'>Lynn</Link></li>
      <li><Link to='/contacts/i'>I</Link></li>
      <li><Link to='/contacts/my'>My</Link></li>
    </ul>

    <Route exact path={`${match.path}`} render={() => <h3>Please</h3>} />
    <Route path={`${match.path}/:contactName`} component={Detail} />
  </div>
);

const Detail = ({match}) => `Your friends name is ${match.params.contactName}`

export default App;
