import React from 'react'
import { ConnectedRouter } from 'connected-react-router'

import routes from './routes'

const App = ({ history }) => {
  return (
    <div>
      <ConnectedRouter history={history}>{routes}</ConnectedRouter>
    </div>
  )
}

export default App
