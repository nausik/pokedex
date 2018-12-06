import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { TiTimes } from 'react-icons/ti'

import Pokemon from './pokemon'

class SideBarComponent extends PureComponent {
  renderPokemons = () => {
    return this.props.favouritePokemons.map(pokemon => {
      return (
        <div
          className="sidebar-favouritePokemons__pokemon"
          key={'sidebar_' + pokemon.id}
        >
          <Pokemon
            pokemon={pokemon}
            type="small"
            hasFavourite={true}
            isFavourite={true}
            toggleFavourite={this.props.toggleFavourite}
          />
        </div>
      )
    })
  }
  render() {
    // We need to pass className so we can have FadeOut animation
    const { close, className } = this.props

    return (
      <div className={'sidebar ' + className}>
        <div className="sidebar__close" onClick={close}>
          <TiTimes />
        </div>
        <div className="sidebar__favourites sidebar-favourites">
          <h3 className="sidebar-favourites__title">Favourite pokemons:</h3>
          <div className="sidebar-favouritePokemons__pokemons">
            {this.renderPokemons()}
          </div>
        </div>
      </div>
    )
  }
}

SideBarComponent.defaultProps = {
  className: ''
}

SideBarComponent.propTypes = {
  close: PropTypes.func.isRequired,
  classsName: PropTypes.string,
  favouritePokemons: PropTypes.array.isRequired,
  toggleFavourite: PropTypes.func.isRequired
}

export default SideBarComponent
