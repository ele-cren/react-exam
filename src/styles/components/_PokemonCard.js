import styled from 'styled-components'

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`

const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 170px;
    height: 170px;
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin-bottom: 5px;
`

const Image = styled.img`
    width: 100%;
`

const PokemonName = styled.div`
    font-size: 24px;
    margin: 0 0 0 20px;
`

const PokemonId = styled.div`
    font-size: 16px;
    margin: 0 0 0 20px;
    opacity: 0.5;
`

export { CardContainer, Card, Image, PokemonName, PokemonId }
