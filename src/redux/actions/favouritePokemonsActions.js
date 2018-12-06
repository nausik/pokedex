import { TOGGLE_FAVOURITE_POKEMON } from '../constants/listConstants'

export function toggleFavouritePokemon(pokemon) {
  return async dispatch => {
    dispatch({
      type: TOGGLE_FAVOURITE_POKEMON,
      payload: { id: pokemon.id, name: pokemon.name }
    })
  }
}

export function restoreFavouritePokemons() {}
