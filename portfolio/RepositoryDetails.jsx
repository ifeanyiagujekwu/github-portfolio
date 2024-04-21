import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import RepositoryList from './RepositoryList';
import RepositoryDetails from './RepositoryDetails';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Repositories</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact>
            <RepositoryList />
          </Route>
          <Route path="/repository/:id">
            <RepositoryDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
