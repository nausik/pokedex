import {
  GET_STATS_REQUEST,
  GET_STATS_SUCCESS,
  GET_STATS_FAIL,
  GET_POKEMON_REQUEST,
  GET_POKEMON_SUCCESS,
  GET_POKEMON_FAIL
} from '../constants/statsConstants'

const initialState = {
  isPokamonFetched: false,
  isStatFetched: false,
  error: null,
  stats: {},
  pokemon: null
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMON_REQUEST:
      return {
        ...state,
        isPokemonFetched: true
      }

    case GET_POKEMON_SUCCESS:
      return {
        ...state,
        isPokemonFetched: false,
        pokemon: action.payload
      }

    case GET_POKEMON_FAIL:
      return {
        ...state,
        isPokemonFetched: false,
        error: action.payload
      }

    case GET_STATS_REQUEST:
      return {
        ...state,
        isStatFetched: true
      }

    case GET_STATS_SUCCESS:
      return {
        ...state,
        isStatFetched: false,
        stats: action.payload
      }

    case GET_STATS_FAIL:
      return {
        ...state,
        isStatFetched: false,
        error: action.payload
      }

    default:
      return state
  }
}
