import styled from 'styled-components'

const StatsContainer = styled.div`
  margin: 10px 0 0 10px;
  background-color: rgba(146, 223, 133, 0.2);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
  @media(max-width: 690px) {
    margin: 0 0 0 5px;
    max-width: 295px;
  }
`

const Title = styled.div`
  font-size: 24px;
  opacity: 0.6;
  text-transform: uppercase;
  margin: 10px 0 0 10px;
`

export { StatsContainer, Title }
