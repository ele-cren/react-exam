import React from 'react'
import styled from 'styled-components'
import { getPokemonIdFromUrl, FACE_IMG_URL } from '../utils'
import { Link } from 'react-router-dom'

const Card = styled.div`
    border: 1px solid black;
    margin: 10px;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`

const PokemonCard = ({ pokemon }) => {
    const id = getPokemonIdFromUrl(pokemon.url)
    return (
        <StyledLink to={ `/${ pokemon.name }` }>
            <Card>
                <h1>{ pokemon.name }</h1>
                <img alt={ `${ pokemon.name }` } src={ `${ FACE_IMG_URL }${ id }.png` } />
            </Card>
        </StyledLink>
    )
}

export default PokemonCard
