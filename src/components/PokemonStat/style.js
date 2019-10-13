import styled from 'styled-components'

const CompleteBar = styled.div`
  height: 20px;
  flex-grow: 1;
  background-color: rgba(0, 0, 0, 0.1);
  margin-right: 10px;
`

const StatBar = styled(CompleteBar)`
  width: ${props => props.base}%;
  background-color: #64CF91;
  @media(max-width: 690px) {
    width: ${props => props.base}%;
  }
`

const BarContainer = styled.div`
  display: flex;
  margin: 10px 0 10px 0;
  width: 400px;
  @media(max-width: 885px) {
    width: 350px;
  }
  @media(max-width: 690px) {
    width: 300px;
  }
`

const Name = styled.div`
  font-size: 16px;
  width: 120px;
  margin-left: 10px;
`

export { CompleteBar, StatBar, BarContainer, Name }
