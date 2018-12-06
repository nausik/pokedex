import React, { PureComponent } from 'react'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'
import { TiStarFullOutline, TiStarOutline } from 'react-icons/ti'

import '../style/pokemon.css'

class Pokemon extends PureComponent {
  openPokemonPage = id => {
    return () => {
      this.props.history.push(`/pokemon/${id}`)
    }
  }

  toggleFavourite = event => {
    event.stopPropagation()
    event.preventDefault()

    this.props.toggleFavourite(this.props.pokemon)
  }

  render() {
    const { pokemon, type, hasFavourite, isFavourite } = this.props

    return (
      <div className={'pokemon pokemon_' + type}>
        <button
          type="button"
          className="pokemon__sprite"
          style={{
            backgroundImage: `url(${`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              pokemon.id
            }.png`})`
          }}
          onClick={this.openPokemonPage(pokemon.id)}
        />

        {hasFavourite ? (
          <div onClick={this.toggleFavourite} className="pokemon__favourite">
            {' '}
            {isFavourite ? <TiStarFullOutline /> : <TiStarOutline />}
          </div>
        ) : (
          ''
        )}

        <p className="pokemon__name">{pokemon.name}</p>
      </div>
    )
  }
}

Pokemon.defaultProps = {
  type: 'big',
  hasFavourite: false,
  isFavourite: false
}

Pokemon.propTypes = {
  pokemon: PropTypes.object.isRequired,
  type: PropTypes.oneOf(['big', 'small']).isRequired,
  toggleFavourite: PropTypes.func,
  hasFavourite: PropTypes.bool,
  isFavourite: PropTypes.bool
}

export default withRouter(Pokemon)
