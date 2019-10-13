import React from 'react'
import typesStyles from './typesStyles'
import { capitalizeString } from '../../utils'
import { TypesContainer, TypeDiv, Container, TypeTitle } from './style'

const PokemonTypes = ({ types }) => {
  if (types) {
    const typesList = types.map((x, i) => {
      return <TypeDiv key={i} style={typesStyles[x.type.name]}>{capitalizeString(x.type.name)}</TypeDiv>
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
