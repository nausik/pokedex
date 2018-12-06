import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Pokemon from './pokemon'
import EvolutionChain from './evolutionChain'

import '../style/pokemonData.css'

class PokemonData extends PureComponent {
  render() {
    const {
      pokemonData,
      evolutionChainData,
      toggleFavourite,
      isFavourite
    } = this.props

    const pokemonStatsJsx = pokemonData.stats.map(stat => {
      return (
        <li
          className={`pokemon-data-stats__stat pokemon-data-stats__stat_${
            stat.stat.name
          }`}
          key={stat.stat.name}
        >
          <span className="bold">{stat.stat.name}</span>: {stat.base_stat}
        </li>
      )
    })

    return (
      <div className="pokemon-data">
        <div className="row row_center">
          <div className="pokemon-data__pokemon">
            <Pokemon
              pokemon={pokemonData}
              hasFavourite={true}
              toggleFavourite={toggleFavourite}
              isFavourite={isFavourite}
            />
          </div>
          <div className="pokemon-data__stats">
            <ul className="pokemon-data-stats">{pokemonStatsJsx}</ul>
          </div>
        </div>
        <div className="pokemon-data__evolutions">
          <h3>Evolution chain:</h3>
          {evolutionChainData ? (
            <EvolutionChain evolutionChainData={evolutionChainData} />
          ) : (
            ''
          )}
        </div>
        <div className="pokemon-data__back">
          <Link to="/">Back to Pokemon List</Link>
        </div>
      </div>
    )
  }
}

PokemonData.propTypes = {
  pokemonData: PropTypes.object.isRequired,
  evolutionChainData: PropTypes.array.isRequired,
  isFavourite: PropTypes.bool.isRequired,
  toggleFavourite: PropTypes.func.isRequired
}

export default PokemonData
