import styled from 'styled-components'

export const Text = styled.p`
  max-width: 400px;
  margin-left: 10px;
  font-size: 20px;
  @media(max-width: 425px) {
    font-size: 16px;
    max-width: 300px;
  }
`