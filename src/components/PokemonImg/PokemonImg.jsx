import React from 'react'
import { ImageContainer, Image } from './style'

const PokemonImg = ({ name, url }) => {
  const pokemonImg = (
    <ImageContainer>
      <Image alt={name} src={url} />
    </ImageContainer>
  )
  return name && url ? pokemonImg : ''
}

export default PokemonImg
