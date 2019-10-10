import React from 'react'
import PokemonCard from './PokemonCard'

const PokedexDisplay = ({ pokemons }) => {
  let cardList = ''
  if (pokemons) {
    cardList = pokemons.map((x, i) => {
      return <PokemonCard key={ i } pokemon={ x } />
    })
  }
  return (
    <div>
      { cardList }
    </div>
  )
}

export default PokedexDisplay
