export const FACE_IMG_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

export const getPokemonIdFromUrl = (url) => {
  const split = url.split('/')
  const id = split[split.length - 2]
  return id
}

export const capitalizeString = (str) => {
  if (str && typeof(str) === 'string') {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  return str
}

export const idToString = (id) => {
  if (id && typeof(id) === 'number') {
    return id < 10 ? `00${ id }` : id < 100 ? `0${ id }` : id
  }
  return id
}