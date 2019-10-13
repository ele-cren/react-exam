import React from 'react'
import { getPokemonIdFromUrl, FACE_IMG_URL, idToString, capitalizeString } from '../utils'
import { Link } from 'react-router-dom'
import { Card, CardContainer, Image, PokemonId, PokemonName } from '../styles/components/_PokemonCard'
import PropTypes from 'prop-types'

const PokemonCard = ({ pokemon }) => {
  const id = getPokemonIdFromUrl(pokemon.url)
  return (
    <CardContainer>
      <Link to={`/${pokemon.name}`}>
        <Card>
          <Image alt={`${pokemon.name}`} src={`${FACE_IMG_URL}${id}.png`} />
        </Card>
      </Link>
      <PokemonId>#{idToString(id)}</PokemonId>
      <PokemonName>{capitalizeString(pokemon.name)}</PokemonName>
    </CardContainer>
  )
}

PokemonCard.propTypes = {
  pokemon: PropTypes.object
}

export default PokemonCard
