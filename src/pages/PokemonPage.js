import React, { Component } from 'react'
import { connect } from 'react-redux'

import PokemonData from '../components/pokemonData'
import NoData from '../components/noData'

import * as pokemonActions from '../redux/actions/pokemonActions'

class PokemonPage extends Component {
  componentDidMount() {
    this.props.getPokemon(this.props.match.params.id)
  }

  componentWillUpdate(params) {
    if (params.location.pathname !== this.props.location.pathname) {
      this.props.getPokemon(params.match.params.id)
    }
  }

  render() {
    let { pokemonData, isFetched, error } = this.props

    return (
      <div className="list">
        {error && <div className="list__error">{error}</div>}
        {isFetched ? (
          <p>Loading...</p>
        ) : (
          <div>
            {pokemonData.pokemon ? (
              <PokemonData
                pokemonData={pokemonData.pokemon}
                evolutionChainData={pokemonData.evolutionChain}
              />
            ) : (
              <NoData />
            )}
          </div>
        )}
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { pokemonData, isFetched, error } = state.pokemon

  return {
    pokemonData,
    isFetched,
    error
  }
}

const mapDispatchToProps = {
  getPokemon: pokemonActions.getPokemon
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonPage)
