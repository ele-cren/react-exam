import React from 'react'
import PokemonCard from './PokemonCard'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const PokedexContainer = styled.div`
  max-width: 1366px;
  display: flex;
  flex-wrap: wrap;
`

const PokedexDisplay = ({ pokemons, search }) => {
  let cardList = ''
  if (pokemons) {
    cardList = pokemons.map((x, i) => {
      return x.name.toLowerCase().includes(search.toLowerCase()) ? <PokemonCard key={ i } pokemon={ x } /> : ''
    })
  }
  return (
    <Container>
      <PokedexContainer>
        { cardList }
      </PokedexContainer>
    </Container>
  )
}

export default PokedexDisplay
