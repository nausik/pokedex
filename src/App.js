import React from 'react'
import { ConnectedRouter } from 'connected-react-router'

import routes from './routes'
import SideBar from './containers/sidebar'

const App = ({ history }) => {
  return (
    <div>
      <SideBar />
      <ConnectedRouter history={history}>{routes}</ConnectedRouter>
    </div>
  )
}

export default App
