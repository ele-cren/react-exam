import React from 'react'
import styled from 'styled-components'
import { getPokemonIdFromUrl, FACE_IMG_URL } from '../utils'

const Card = styled.div`
    border: 1px solid black;
    margin: 10px;
`

const PokemonCard = ({ pokemon }) => {
    const id = getPokemonIdFromUrl(pokemon.url)
    return (
        <Card>
            <h1>{ pokemon.name }</h1>
            <img alt={ `${ pokemon.name }` } src={ `${ FACE_IMG_URL }${ id }.png` } />
        </Card>
    )
}

export default PokemonCard
