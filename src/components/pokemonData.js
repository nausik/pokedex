import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Pokemon from './pokemon'
import EvolutionChain from './evolutionChain'
import NoData from './noData'

import '../style/pokemonData.css'

class PokemonData extends PureComponent {
  render() {
    const { pokemonData, evolutionChainData } = this.props

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
            <Pokemon pokemon={pokemonData} />
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
            <NoData />
          )}
        </div>
      </div>
    )
  }
}

PokemonData.propTypes = {
  pokemonData: PropTypes.object.isRequired,
  evolutionChainData: PropTypes.array.isRequired
}

export default PokemonData
