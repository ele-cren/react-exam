import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(56, 188, 155, 0.2);
    margin-top: 10px;
`

const PokedexContainer = styled.div`
  max-width: 1366px;
  display: flex;
  flex-wrap: wrap;
  @media(max-width: 565px) {
    justify-content: center;
  }
`

export { Container, PokedexContainer }
