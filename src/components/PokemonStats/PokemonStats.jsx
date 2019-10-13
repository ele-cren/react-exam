import React from 'react'
import PokemonStat from '../PokemonStat/PokemonStat'
import { removeMinusStr } from '../../utils'
import { StatsContainer, Title } from './style'

const PokemonStats = ({ stats }) => {
  if (stats) {
    const statsList = stats.map((x, i) => {
      return <PokemonStat key={i} name={removeMinusStr(x.stat.name)} base={(x.base_stat / 255) * 100} />
    })
    return (
      <StatsContainer>
        <Title>Stats</Title>
        {statsList}
      </StatsContainer>
    )
  }
  return ''
}

export default PokemonStats
