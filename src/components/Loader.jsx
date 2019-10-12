import React from 'react'
import styled, { keyframes } from 'styled-components'
import PokedexImg from '../assets/pokedex.png'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`

const Pokedex = styled.div`
  width: 50px;
  height: 50px;
  background-image: url(${ PokedexImg });
  background-position: center;
  background-size: cover;
  animation: ${ rotate } 1s linear infinite;
`

const Loader = () => {
  return (
    <Container>
      <Pokedex></Pokedex>
    </Container>
  )
}

export default Loader
