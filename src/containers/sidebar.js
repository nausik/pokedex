import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TiThMenu } from 'react-icons/ti'

import SideBarComponent from '../components/sidebar'

import * as favritePokemonsActions from '../redux/actions/favoritePokemonsActions'

import '../style/sidebar.css'

class SideBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      fadeOut: false
    }
  }

  toggleSideBar = () => {
    // For FadeOut animation
    if (this.state.isOpen) {
      this.setFadeOut()
    } else {
      this.setState({ isOpen: true })
    }
  }

  setFadeOut = () => {
    const FADE_OUT_LENGTH = 500
    this.setState({ fadeOut: true })

    setTimeout(() => {
      this.setState({ fadeOut: false, isOpen: false })
    }, FADE_OUT_LENGTH)
  }

  render() {
    const { isOpen, fadeOut } = this.state
    return (
      <div>
        {isOpen ? (
          <SideBarComponent
            close={this.toggleSideBar}
            className={fadeOut ? 'fade-out' : ''}
          />
        ) : (
          <div className="open-sidebar" onClick={this.toggleSideBar}>
            {' '}
            <TiThMenu />{' '}
          </div>
        )}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar)
