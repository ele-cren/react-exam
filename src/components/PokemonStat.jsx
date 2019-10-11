import React from 'react'
import styled from 'styled-components'

const CompleteBar = styled.div`
  height: 20px;
  width: 180px;
  background-color: grey;
`

const StatBar = styled(CompleteBar)`
  width: 25%;
  background-color: blue;
`

const PokemonStat = ({ base, name }) => {
  return (
    <div>
    <div>{ name }</div>
      <CompleteBar>
        <StatBar></StatBar>
      </CompleteBar>
      <div>{ base }</div>
    </div>
  )
}

export default PokemonStat
