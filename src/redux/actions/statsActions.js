import {
  GET_STATS_REQUEST,
  GET_STATS_SUCCESS,
  GET_STATS_FAIL,
  SET_STATS,
  GET_POKEMON_REQUEST,
  GET_POKEMON_SUCCESS,
  GET_POKEMON_FAIL,
  SET_POKEMON
} from '../constants/statsConstants'

function setPokemon(data) {
  return {
    type: SET_POKEMON,
    payload: data
  }
}

function setStats(data) {
  return {
    type: SET_STATS,
    payload: data
  }
}

export function getStats(id) {
  return dispatch => {
    dispatch({
      type: GET_STATS_REQUEST
    })

    return fetch(`https://pokeapi.co/api/v2/stat/${id}`)
      .then(response => {
        if (response.ok) {
          return response.json()
        }

        throw new Error(`${response.status}: ${response.statusText}`)
      })
      .then(data => {
        dispatch({
          type: GET_STATS_SUCCESS
        })
        dispatch(setStats(data))
      })
      .catch(error => {
        dispatch({
          type: GET_STATS_FAIL,
          payload: error.message
        })
      })
  }
}

export function getPokemon(id) {
  console.log('hi!', id)
  return dispatch => {
    dispatch({
      type: GET_POKEMON_REQUEST
    })

    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(response => {
        if (response.ok) {
          return response.json()
        }

        throw new Error(`${response.status}: ${response.statusText}`)
      })
      .then(data => {
        dispatch({
          type: GET_POKEMON_SUCCESS
        })
        dispatch(setPokemon(data))
      })
      .catch(error => {
        dispatch({
          type: GET_POKEMON_FAIL,
          payload: error.message
        })
      })
  }
}
