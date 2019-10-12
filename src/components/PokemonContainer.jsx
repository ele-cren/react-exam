import React from 'react'
import { capitalizeString, FACE_IMG_URL, idToString } from '../utils'
import PokemonImg from './PokemonImg'
import PokemonInfos from './PokemonInfos'
import PokemonStats from './PokemonStats'
import PokemonTypes from '././PokemonTypes'
import PokemonText from './PokemonText'

const PokemonContainer = ({ pokemon, species }) => {
  const { name, id, abilities, height, weight, stats, types } = pokemon
  const { flavor_text_entries } = species
  return pokemon && flavor_text_entries ? (
    <div>
      <div><span>{ capitalizeString(name) }</span> <span>#{ idToString(id) }</span></div>
      <PokemonImg name={ name } url={ `${ FACE_IMG_URL }${ id }.png` } /><br />
      <PokemonText text={ flavor_text_entries[1].flavor_text } />
      <PokemonInfos abilities={ abilities } height={ height } weight={ weight } /><br />
      <PokemonStats stats={ stats } /><br />
      <PokemonTypes types={ types } />
    </div>
  ) : ''
}

export default PokemonContainer
