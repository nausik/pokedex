import { connect } from 'react-redux'
import * as statsActions from '../redux/actions/statsActions'

import React, { Component } from 'react'
import Pokemon from '../components/pokemon'

class Character extends Component {
  constructor(props) {
    super(props)
    this.id = props.match.params.id
  }

  componentDidMount() {
    this.props.getPokemon(this.id)
    // this.props.getStats()
  }

  render() {
    // const pokemon = this.props.displayedPokemons.filter(
    // (pokemon) => pokemon.name === this.name
    // )

    const { pokemon, isPokemonFetched, error } = this.props

    // console.log("stats", stats)

    return (
      <div className="pokemons__character">
        {error && <div className="stats__error">{error}</div>}
        {isPokemonFetched ? <p>Loading...</p> : <Pokemon pokemon={pokemon} />}
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { pokemon, stats, error, isPokemonFetched, isStatFetched } = state.stats
  return { pokemon, stats, error, isPokemonFetched, isStatFetched }
}

const mapDispatchToProps = {
  getPokemon: statsActions.getPokemon,
  getStats: statsActions.getStats
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Character)
