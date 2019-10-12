import React from 'react'
import PokemonCard from './PokemonCard'
import { Container, PokedexContainer } from '../styles/components/_PokemonsContainer'

const PokemonsContainer = ({ pokemons, search }) => {
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

export default PokemonsContainer
