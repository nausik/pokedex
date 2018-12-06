import { combineReducers } from 'redux'
import list from './listReducer'
import pokemon from './pokemonReducer'
import favoritePokemons from './favoritePokemonsReducer'

export default combineReducers({
  list,
  pokemon,
  favoritePokemons
})
