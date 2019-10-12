import styled from 'styled-components'

const CompleteBar = styled.div`
  height: 20px;
  width: 220px;
  background-color: rgba(0, 0, 0, 0.1);
  margin-right: 10px;
  @media(max-width: 630px) {
    width: 150px;
  }
`

const StatBar = styled(CompleteBar)`
  width: ${ props => props.base }%;
  background-color: #64CF91;
  @media(max-width: 630px) {
    width: ${ props => props.base }%;
  }
`

const BarContainer = styled.div`
  display: flex;
  margin: 10px 0 10px 0;
`

const Name = styled.div`
  font-size: 16px;
  width: 115px;
  margin-left: 10px;
`

export { CompleteBar, StatBar, BarContainer, Name }
