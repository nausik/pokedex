import React from 'react'
import { Route, Switch } from 'react-router'
import ListPage from './pages/ListPage'
import PokemonPage from './pages/PokemonPage'
import Layout from './components/layout'

/*
 @see https://github.com/supasate/connected-react-router/blob/master/FAQ.md
 */
const routes = (
  <div>
    <Switch>
      <Layout>
        <Route exact path="/" component={ListPage} />
        <Route exact path="/pokemon/:id" component={PokemonPage} />
      </Layout>
    </Switch>
  </div>
)

export default routes
