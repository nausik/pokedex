import {
  SET_POKEMON,
  GET_POKEMON_REQUEST,
  GET_POKEMON_SUCCESS,
  GET_POKEMON_FAIL
} from '../constants/listConstants'

import {
  getPokemonData,
  getPokemonSpecies,
  getEvolutionChainData
} from '../../http/http'

const getIdFromResourceUrl = url => {
  const splitUrl = url.split('/')
  return splitUrl[splitUrl.length - 2]
}

const handleEvolutionChain = async evolutionLink => {
  return await Promise.all(
    evolutionLink.map(evolutionData => {
      return Promise.all([
        getPokemonData(evolutionData.species.name),
        handleEvolutionChain(evolutionData.evolves_to)
      ])
    })
  )
}

export function getPokemon(id) {
  return async dispatch => {
    // TODO: move HTTP Error Handler somewhere + make it reusable (wrap in creator function and pass action.type as param)
    const handleHttpError = error => {
      dispatch({
        type: GET_POKEMON_FAIL,
        payload: error.message
      })
    }

    dispatch({
      type: GET_POKEMON_REQUEST
    })

    const [pokemonData, pokemonSpeciesData] = await Promise.all([
      getPokemonData(id),
      getPokemonSpecies(id)
    ])

    const evolutionChainId = getIdFromResourceUrl(
      pokemonSpeciesData.evolution_chain.url
    )

    // Get evolution chain and pokemons data
    const evolutionChainData = await getEvolutionChainData(evolutionChainId)
      .then(evolutionChainData => {
        // Wrap .chain into arr, so we can use recursion
        return handleEvolutionChain([evolutionChainData.chain])
      })
      .catch(handleHttpError)

    dispatch({
      type: GET_POKEMON_SUCCESS
    })

    dispatch({
      type: SET_POKEMON,
      payload: {
        pokemon: pokemonData,
        evolutionChain: evolutionChainData
      }
    })
  }
}
