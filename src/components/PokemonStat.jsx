import React from 'react'
import { BarContainer, Name, CompleteBar, StatBar } from '../styles/components/_PokemonStat'

const PokemonStat = ({ base, name }) => {
  return (
    <BarContainer>
      <Name>{ name }</Name>
        <CompleteBar>
          <StatBar base={ base }></StatBar>
        </CompleteBar>
    </BarContainer>
  )
}

export default PokemonStat
