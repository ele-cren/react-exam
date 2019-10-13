import React from 'react'
import { BarContainer, Name, CompleteBar, StatBar } from '../styles/components/_PokemonStat'
import PropTypes from 'prop-types'

const PokemonStat = ({ base, name }) => {
  return (
    <BarContainer>
      <Name>{name}</Name>
      <CompleteBar>
        <StatBar base={base} />
      </CompleteBar>
    </BarContainer>
  )
}

PokemonStat.propTypes = {
  base: PropTypes.number,
  name: PropTypes.string
}

export default PokemonStat
