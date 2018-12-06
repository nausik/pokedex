import {
  TOGGLE_FAVORITE_POKEMON,
  RESTORE_FAVORITE_POKEMONS
} from '../constants/listConstants'

const initialState = {
  favoritePokemons: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_FAVORITE_POKEMON:
      return {
        ...state
      }

    case RESTORE_FAVORITE_POKEMONS:
      return {
        ...state
      }

    default:
      return state
  }
}
