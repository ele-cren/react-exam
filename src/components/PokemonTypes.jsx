import React from 'react'
import _types from '../styles/_types'
import { capitalizeString } from '../utils'
import { TypesContainer, TypeDiv, Container, TypeTitle } from '../styles/components/_PokemonTypes'

const PokemonTypes = ({ types }) => {
  if (types) {
    const typesList = types.map((x, i) => {
      return <TypeDiv key={i} style={_types[x.type.name]}>{capitalizeString(x.type.name)}</TypeDiv>
    })
    return (
      <Container>
        <TypeTitle>Types</TypeTitle>
        <TypesContainer>
          {typesList}
        </TypesContainer>
      </Container>
    )
  }
  return ''
}

export default PokemonTypes
