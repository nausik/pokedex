import React from 'react'
import { Route, Switch } from 'react-router'
import ListPage from './pages/ListPage'
import PokemonPage from './pages/PokemonPage'

/*
 @see https://github.com/supasate/connected-react-router/blob/master/FAQ.md
 */
const routes = (
  <div>
    <Switch>
      <Route exact path="/" component={ListPage} />
      <Route exact path="/pokemon/:id" component={PokemonPage} />
    </Switch>
  </div>
)

export default routes
