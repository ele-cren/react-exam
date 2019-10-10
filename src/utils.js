export const FACE_IMG_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

export const getPokemonIdFromUrl = (url) => {
  const split = url.split('/')
  const id = split[split.length - 2]
  return id
}