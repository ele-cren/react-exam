import React from 'react'
import { removeMinusStr } from '../utils'
import { Container, Info, InfoTitle, AbilitiesContainer, Ability } from '../styles/components/_PokemonInfos'

const PokemonInfos = ({ height, weight, abilities, moves }) => {
  if (height && weight && abilities) {
    const abilitiesList = abilities.map((x, i) => {
      const abilityName = removeMinusStr(x.ability.name)
      const ability = (
        <Ability key={i}>{i === abilities.length - 1 ? abilityName : `${abilityName}, `}</Ability>
      )
      return ability
    })
    const restrictedMoves = moves.slice(0, 3)
    const movesList = restrictedMoves.map((x, i) => {
      const moveName = removeMinusStr(x.move.name)
      const move = (
        <Ability key={i}>{i === restrictedMoves.length - 1 ? moveName : `${moveName}, `}</Ability>
      )
      return move
    })
    return (
      <Container>
        <div>
          <InfoTitle>Height</InfoTitle>
          <Info>{height * 10} cm</Info>
        </div>
        <div>
          <InfoTitle>Weight</InfoTitle>
          <Info>{weight / 10} kg</Info>
        </div>
        <div>
          <InfoTitle>Abilities</InfoTitle>
          <AbilitiesContainer>{abilitiesList}</AbilitiesContainer>
        </div>
        <div>
          <InfoTitle>Moves</InfoTitle>
          <AbilitiesContainer>{movesList}</AbilitiesContainer>
        </div>
      </Container>
    )
  }
  return ''
}

export default PokemonInfos
