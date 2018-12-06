import React, { PureComponent } from 'react'

import SideBar from '../containers/sidebar'

class Layout extends PureComponent {
  render() {
    return (
      <div>
        <SideBar />
        {this.props.children}
      </div>
    )
  }
}

export default Layout
