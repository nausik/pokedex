import { TOGGLE_FAVOURITE_POKEMON } from '../constants/listConstants'

const restoreFavouritePokemons = () => {
  let localStorageList = localStorage.getItem('favourite-pokemons')
  return localStorageList ? JSON.parse(localStorageList) : []
}

const cacheFavouritePokemons = newList => {
  localStorage.setItem('favourite-pokemons', JSON.stringify(newList))
}

const initialState = {
  favouritePokemons: restoreFavouritePokemons()
}

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_FAVOURITE_POKEMON:
      let newFavouritePokemons = state.favouritePokemons.filter(
        pokemon => pokemon.id !== action.payload.id
      )

      newFavouritePokemons =
        newFavouritePokemons.length === state.favouritePokemons.length
          ? [...newFavouritePokemons, action.payload]
          : newFavouritePokemons
      cacheFavouritePokemons(newFavouritePokemons)

      return {
        ...state,
        favouritePokemons: newFavouritePokemons
      }

    default:
      return state
  }
}
