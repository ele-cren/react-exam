import React from 'react'
import { getPokemonIdFromUrl, FACE_IMG_URL } from '../utils'
import { Link } from 'react-router-dom'
import { idToString, capitalizeString } from '../utils'
import { Card, CardContainer, Image, PokemonId, PokemonName } from '../styles/components/_PokemonCard'

const PokemonCard = ({ pokemon }) => {
    const id = getPokemonIdFromUrl(pokemon.url)
    return (
        <CardContainer>
            <Link to={ `/${ pokemon.name }` }>
                <Card>
                    <Image alt={ `${ pokemon.name }` } src={ `${ FACE_IMG_URL }${ id }.png` } />
                </Card>
            </Link>
            <PokemonId>#{ idToString(id) }</PokemonId>
            <PokemonName>{ capitalizeString(pokemon.name) }</PokemonName>
        </CardContainer>
    )
}

export default PokemonCard
