import { connect } from 'react-redux'
import * as listActions from '../redux/actions/listActions'

import React, { Component } from 'react'

// import { push } from 'react-router-redux'

import { Link } from 'react-router-dom'

import Pokemon from '../components/pokemon'
import Search from '../components/search'

class ListPage extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  componentDidMount() {
    this.props.getPokemons()
  }

  handleSearch(event) {
    this.props.filterPokemons(event.currentTarget.value)
  }

  handleClick(e, pokemon) {
    console.log(pokemon)
  }

  // handleClick(event) {
  // console.log("click")
  // console.log(event.currentTarget)
  //    const url = '/pokemon/pikachu'
  // this.props.dispatch(push(url))
  // this.props.dispatch(push(url))
  // this.props.router.push(url)
  // this.props.router.push("/somewhere")
  // this.props.hax(push(url))
  // this.props.hax(url)
  // }

  render() {
    let { displayedPokemons, isFetched, error } = this.props

    let pokemons = displayedPokemons.map(pokemon => {
      const url = `/pokemon/${pokemon.id}`

      return (
        <li
          className="pokemons__item"
          key={pokemon.id}
          /* onClick={(e) => this.handleClick(e, pokemon)} */
        >
          <Link to={url}>
            <Pokemon pokemon={pokemon} />
          </Link>
        </li>
      )
    })

    return (
      <div className="list">
        {error && <div className="list__error">{error}</div>}
        <div className="list__search">
          <Search onChange={this.handleSearch} />
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
  const { displayedPokemons, isFetched, error } = state.list

  return {
    displayedPokemons,
    isFetched,
    error
  }
}

const mapDispatchToProps = {
  getPokemons: listActions.getPokemons,
  filterPokemons: listActions.filterPokemons
}
// hax: (url) => push(url)

// const mapDispatchToProps = (dispatch) => ({
//   getPokemons: listActions.getPokemons,
//   filterPokemons: listActions.filterPokemons,
//   dispatch: dispatch
// })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListPage)
