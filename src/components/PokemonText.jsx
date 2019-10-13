import React from 'react'
import { Text } from '../styles/components/_PokemonText'
import PropTypes from 'prop-types'

const PokemonText = ({ text }) => {
  return text ? <Text>{text}</Text> : ''
}

PokemonText.propTypes = {
  text: PropTypes.string
}

export default PokemonText
