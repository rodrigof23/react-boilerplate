import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { StateProvider } from '../state';
import reducers, { INITIAL_STATES } from '../state/reducers';
import PrivateRoute from './private-route';
import Header from '../components/header';
import Login from '../views/login';
import Home from '../views/home';

const Root = () => {
  return (
    <StateProvider initialState={INITIAL_STATES} reducer={reducers}>
      <Router>
        <>
          <Header />
          <div className="content">
            <Switch>
              <Route exact path="/" component={Login} />
              <PrivateRoute path="/home" component={Home} />
            </Switch>
          </div>
        </>
      </Router>
    </StateProvider>
  );
};

export default Root;
