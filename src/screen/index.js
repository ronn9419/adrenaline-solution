import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import ListScreen from '@screen/List'
import DetailsScreen from '@screen/Details'

export default () => (
  <Router>
    <Switch>
      <Route path={'/list'} component={ListScreen} />
      <Route path={'/details/:id'} component={DetailsScreen} />
      <Redirect to={'/list'} />
    </Switch>
  </Router>
)
