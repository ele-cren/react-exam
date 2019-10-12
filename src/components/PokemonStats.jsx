import React from 'react'
import PokemonStat from './PokemonStat'
import styled from 'styled-components'
import { removeMinusStr } from '../utils'

const StatsContainer = styled.div`
  margin: 10px 0 0 10px;
  background-color: rgba(146, 223, 133, 0.2);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
  @media(max-width: 630px) {
    margin: 0 0 0 5px;
    max-width: 295px;
  }
`

const Title = styled.div`
  font-size: 24px;
  opacity: 0.6;
  text-transform: uppercase;
  margin: 10px 0 0 10px;
`

const PokemonStats = ({ stats }) => {
  if (stats) {
    const statsList = stats.map((x, i) => {
      return <PokemonStat key={ i } name={ removeMinusStr(x.stat.name) } base={ (x.base_stat / 255) * 100 } />
    })
    return (
      <StatsContainer>
        <Title>Stats</Title>
        { statsList }
      </StatsContainer>
    )
  }
  return ''
}

export default PokemonStats
