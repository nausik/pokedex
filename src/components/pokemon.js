import React, { PureComponent } from 'react'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'

import '../style/pokemon.css'

class Pokemon extends PureComponent {
  openPokemonPage = id => {
    return () => {
      this.props.history.push(`/pokemon/${id}`)
    }
  }

  render() {
    const { pokemon, type } = this.props

    return (
      <div
        className={'pokemon pokemon_' + type}
        onClick={this.openPokemonPage(pokemon.id)}
      >
        <button
          type="button"
          className="pokemon__sprite"
          style={{
            backgroundImage: `url(${`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              pokemon.id
            }.png`})`
          }}
        />
        <p className="pokemon__name">{pokemon.name}</p>
      </div>
    )
  }
}

Pokemon.defaultProps = {
  type: 'big'
}

Pokemon.propTypes = {
  pokemon: PropTypes.object.isRequired,
  type: PropTypes.oneOf(['big', 'small']).isRequired
}

export default withRouter(Pokemon)
