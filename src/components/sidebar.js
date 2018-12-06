import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { TiTimes } from 'react-icons/ti'

import Pokemon from './pokemon'

class SideBarComponent extends PureComponent {
  render() {
    // We need to pass className so we can have FadeOut animation
    const { close, className } = this.props

    return (
      <div className={'sidebar ' + className}>
        <div className="sidebar__close" onClick={close}>
          <TiTimes />
        </div>
        asdasd
      </div>
    )
  }
}

SideBarComponent.defaultProps = {
  className: ''
}

SideBarComponent.propTypes = {
  close: PropTypes.func.isRequired,
  classsName: PropTypes.string
}

export default SideBarComponent
