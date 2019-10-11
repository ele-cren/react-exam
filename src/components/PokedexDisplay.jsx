import React from 'react'
import PokemonCard from './PokemonCard'
import styled from 'styled-components'

const PokedexContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    border: 1px solid black;
    max-width: 1366px;
    margin: auto;
`

const PokedexDisplay = ({ pokemons }) => {
  let cardList = ''
  if (pokemons) {
    cardList = pokemons.map((x, i) => {
      return <PokemonCard key={ i } pokemon={ x } />
    })
  }
  return (
    <PokedexContainer>
      { cardList }
    </PokedexContainer>
  )
}

export default PokedexDisplay