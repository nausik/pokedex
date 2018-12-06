import { combineReducers } from 'redux'

import list from './listReducer'
import pokemon from './pokemonReducer'
import favouritePokemons from './favouritePokemonsReducer'

export default combineReducers({
  list,
  pokemon,
  favouritePokemons
})
