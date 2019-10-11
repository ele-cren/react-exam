import React from 'react'
import typesStyles from '../typesStyles'
import styled from 'styled-components'

const TypeDiv = styled.div`
  width: 100px;
  border-radius: 2px;
  padding: 2px 0 2px 0;
  text-align: center;
`

const PokemonTypes = ({ types }) => {
  if (types) {
    const typesList = types.map((x, i) => {
      return <TypeDiv key={ i } style={ typesStyles[x.type.name] } >{ x.type.name }</TypeDiv>
    })
    return typesList
  }
  return ''
}

export default PokemonTypes
