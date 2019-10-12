import styled from 'styled-components'

const Container = styled.div`
  background-color: rgba(100, 207, 145, 0.2);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
  margin: 10px 0 0 5px;
  width: 240px;
  padding: 5px 0 15px 0;
`

const InfoTitle = styled.div`
  font-size: 24px;
  opacity: 0.6;
  text-transform: uppercase;
  margin: 10px 0 0 10px;
`

const Info = styled.div`
  font-size: 24px;
  margin-left: 10px;
`

const Ability = styled.span`
  font-size: 24px;
`

const AbilitiesContainer = styled.div`
  margin-left: 10px;
`

export { Container, InfoTitle, Info, AbilitiesContainer, Ability }
