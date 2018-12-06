const fetchReponseToJson = response => {
  if (response.ok) {
    return response.json()
  }
  throw new Error(`${response.status}: ${response.statusText}`)
}

export const getPokemonData = nameOrId => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId}/`).then(
    fetchReponseToJson
  )
}

export const getPokemonSpecies = nameOrId => {
  return fetch(`https://pokeapi.co/api/v2/pokemon-species/${nameOrId}/`).then(
    fetchReponseToJson
  )
}

export const getEvolutionChainData = id => {
  return fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}/`).then(
    fetchReponseToJson
  )
}

export const getPokemonsList = () => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/?limit=784`).then(
    fetchReponseToJson
  )
}
