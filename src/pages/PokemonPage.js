import React, { Component } from 'react'
import { connect } from 'react-redux'

import PokemonData from '../components/pokemonData'
import NoData from '../components/noData'

import * as pokemonActions from '../redux/actions/pokemonActions'
import * as favouritePokemonActions from '../redux/actions/favouritePokemonsActions'

class PokemonPage extends Component {
  componentDidMount() {
    this.props.getPokemon(this.props.match.params.id)
  }

  componentWillUpdate(params) {
    if (params.location.pathname !== this.props.location.pathname) {
      this.props.getPokemon(params.match.params.id)
    }
  }

  toggleFavourite = pokemon => {
    this.props.toggleFavouritePokemon(pokemon)
  }

  isFavourite = () => {
    return this.props.favouritePokemons.some(
      pokemon => pokemon.id === this.props.pokemonData.pokemon.id
    )
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
                isFavourite={this.isFavourite()}
                toggleFavourite={this.toggleFavourite}
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
  const { pokemonData, isFetched, error } = state.pokemon,
    { favouritePokemons } = state.favouritePokemons

  return {
    pokemonData,
    isFetched,
    error,
    favouritePokemons
  }
}

const mapDispatchToProps = {
  getPokemon: pokemonActions.getPokemon,
  toggleFavouritePokemon: favouritePokemonActions.toggleFavouritePokemon
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonPage)
