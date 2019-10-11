import React from 'react'
import { capitalizeString } from '../utils'
import PokemonImg from './PokemonImg'
import PokemonInfos from './PokemonInfos'
import PokemonStats from './PokemonStats'
import PokemonTypes from '././PokemonTypes'

const PokemonContainer = ({ pokemon }) => {
  return pokemon ? (
    <div>
      <div><span>{ capitalizeString(pokemon.name) }</span> <span>#{ pokemon.id }</span></div>
      <PokemonImg />
      <PokemonInfos />
      <PokemonStats />
      <PokemonTypes />
    </div>
  ) : ''
}

export default PokemonContainer
