import React from 'react'

const PokemonImg = ({ name, url }) => {
  return name && url ? <img alt={ name } src={ url } /> : ''
}

export default PokemonImg
