import {
  GET_POKEMON_REQUEST,
  GET_POKEMON_FAIL,
  GET_POKEMON_SUCCESS,
  SET_POKEMON
} from '../constants/listConstants'

const initialState = {
  isFetched: false,
  error: null,
  pokemonData: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMON_REQUEST:
      return {
        ...state,
        isFetched: true
      }

    case GET_POKEMON_SUCCESS:
      return {
        ...state,
        isFetched: false
      }

    case GET_POKEMON_FAIL:
      return {
        ...state,
        isFetched: false,
        error: action.payload
      }

    case SET_POKEMON:
      return {
        ...state,
        pokemonData: action.payload
      }

    default:
      return state
  }
}
