import React from 'react'
import { Text } from '../styles/components/_PokemonText'

const PokemonText = ({ text }) => {
  return text ? <Text>{ text }</Text> : ''
}

export default PokemonText
