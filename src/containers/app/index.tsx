import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFoundPage from '../not-found-page';
import HomePage from '../home-page';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
