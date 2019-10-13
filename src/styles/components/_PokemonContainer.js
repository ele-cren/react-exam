import styled from 'styled-components'

const Container = styled.div`
  width: 1366px;
  margin: auto;
`

const Path = styled.div`
    margin: 10px 0 12px 0;
`

const PathText = styled.span`
  font-family: 'Playfair Display', serif;
  font-size: 24px;
`

const PokedexPath = styled(PathText)`
  margin-left: 5px;
  color: black;
  padding-bottom: 2px;
  border-bottom: 1px solid #05A89F;
`

const PokemonName = styled(PathText)`
  font-weight: bold;
`
const PokemonId = styled(PokemonName)`
  margin-left: 5px;
  opacity: 0.5;
`

const ImageTextContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media(max-width: 670px) {
    flex-direction: column;
  }
`

const InfosStatsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media(max-width: 690px) {
    flex-direction: column;
  }
`

export { Container, InfosStatsContainer, ImageTextContainer, Path, PathText, PokedexPath, PokemonName, PokemonId }
