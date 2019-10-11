import React from 'react'
import PokemonStat from './PokemonStat'

const PokemonStats = ({ stats }) => {
  if (stats) {
    const statsList = stats.map((x, i) => {
      return <PokemonStat key={ i } name={ x.stat.name } base={ x.base_stat } />
    })
    return (
      <div>
        { statsList }
      </div>
    )
  }
  return ''
}

export default PokemonStats
