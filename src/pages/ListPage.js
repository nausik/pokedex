import { connect } from 'react-redux'
import React, { Component } from 'react'

import Pokemon from '../components/pokemon'
import Search from '../components/search'

import * as listActions from '../redux/actions/listActions'
import * as favouritePokemonActions from '../redux/actions/favouritePokemonsActions'

class ListPage extends Component {
  componentDidMount() {
    this.props.getPokemons()
  }

  handleSearch(event) {
    this.props.filterPokemons(event.currentTarget.value)
  }

  toggleFavourite = pokemon => {
    this.props.toggleFavouritePokemon(pokemon)
  }

  isFavourite = pokemonParam => {
    return this.props.favouritePokemons.some(
      pokemon => pokemon.id === pokemonParam.id
    )
  }

  render() {
    let { displayedPokemons, isFetched, error } = this.props

    let pokemons = displayedPokemons.map(pokemon => {
      return (
        <li className="pokemons__item" key={pokemon.id}>
          <Pokemon
            pokemon={pokemon}
            hasFavourite={true}
            isFavourite={this.isFavourite(pokemon)}
            toggleFavourite={this.toggleFavourite}
          />
        </li>
      )
    })

    return (
      <div className="list">
        {error && <div className="list__error">{error}</div>}
        <div className="list__search">
          <Search onChange={this.handleSearch.bind(this)} />
        </div>
        {isFetched ? (
          <p>Loading...</p>
        ) : (
          <ul className="pokemons">{pokemons}</ul>
        )}
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { displayedPokemons, isFetched, error } = state.list,
    { favouritePokemons } = state.favouritePokemons

  return {
    displayedPokemons,
    isFetched,
    error,
    favouritePokemons
  }
}

const mapDispatchToProps = {
  getPokemons: listActions.getPokemons,
  filterPokemons: listActions.filterPokemons,
  toggleFavouritePokemon: favouritePokemonActions.toggleFavouritePokemon
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListPage)
