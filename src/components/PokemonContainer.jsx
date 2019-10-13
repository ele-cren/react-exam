import React from 'react'
import { capitalizeString, FACE_IMG_URL, idToString } from '../utils'
import PokemonImg from './PokemonImg'
import PokemonInfos from './PokemonInfos'
import PokemonStats from './PokemonStats'
import PokemonTypes from '././PokemonTypes'
import PokemonText from './PokemonText'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Container,
  Path,
  PokedexPath,
  PathText,
  PokemonId, PokemonName,
  ImageTextContainer,
  InfosStatsContainer
} from '../styles/components/_PokemonContainer'

const PokemonContainer = ({ pokemon, species }) => {
  const { name, id, abilities, height, weight, stats, types, moves } = pokemon
  const { flavor_text_entries: flavorTextEntries } = species
  let pokemonText = ''
  if (flavorTextEntries) {
    for (const entry of flavorTextEntries) {
      if (entry.language.name === 'en') {
        pokemonText = entry.flavor_text
        break
      }
    }
  }

  return pokemon && flavorTextEntries ? (
    <Container>
      <Path>
        <Link to='/' style={{ textDecoration: 'none' }}><PokedexPath>Pokedex</PokedexPath></Link>
        <PathText> / </PathText>
        <PokemonName>{capitalizeString(name)}</PokemonName>
        <PokemonId>#{idToString(id)}</PokemonId>
      </Path>
      <ImageTextContainer>
        <PokemonImg name={name} url={`${FACE_IMG_URL}${id}.png`} /><br />
        <PokemonText text={pokemonText} />
      </ImageTextContainer>
      <InfosStatsContainer>
        <PokemonInfos moves={moves} abilities={abilities} height={height} weight={weight} /><br />
        <PokemonStats stats={stats} /><br />
      </InfosStatsContainer>
      <PokemonTypes types={types} />
    </Container>
  ) : ''
}

PokemonContainer.propTypes = {
  pokemon: PropTypes.object,
  species: PropTypes.object
}

export default PokemonContainer
