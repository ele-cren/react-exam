import React from 'react'
import PokemonCard from '../PokemonCard/PokemonCard'
import { Container, PokedexContainer } from './style'
import PropTypes from 'prop-types'
import MyInfo from '../MyInfo/MyInfo'

const PokemonsContainer = ({ pokemons, search }) => {
  let cardList = []
  if (pokemons) {
    const filteredList = pokemons.filter(x => x.name.toLowerCase().includes(search.toLowerCase()))
    cardList = filteredList.map((x, i) => {
      return <PokemonCard key={i} pokemon={x} />
    })
  }
  return (
    <Container background={cardList.length > 0}>
      <PokedexContainer>
        {(cardList.length > 0 || !pokemons) ? cardList : <MyInfo message='There are no pokémon to display.' />}
      </PokedexContainer>
    </Container>
  )
}

PokemonsContainer.propTypes = {
  pokemons: PropTypes.array,
  search: PropTypes.string
}

export default PokemonsContainer
