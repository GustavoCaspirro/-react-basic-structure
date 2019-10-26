import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Search from './pages/Search';

const Routes = () => {
    return(
        <Switch>
            <Route
                exact
                path="/"
                component={ Search }
            />
          <Route
            exact
            path="/test"
            component={ () => (<div>Page not found</div>) }/>
        </Switch>
    );
}

export default Routes;