import React from 'react'
import { Route, Switch } from 'react-router'
import ListPage from './pages/ListPage'
import Character from './pages/Character'

/*
 @see https://github.com/supasate/connected-react-router/blob/master/FAQ.md
 */
const routes = (
  <div>
    <Switch>
      <Route exact path="/" component={ListPage} />
      <Route exact path="/pokemon/:id" component={Character} />
    </Switch>
  </div>
)

export default routes
