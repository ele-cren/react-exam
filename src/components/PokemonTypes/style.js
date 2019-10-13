import styled from 'styled-components'

const TypeDiv = styled.div`
  width: 100px;
  border-radius: 2px;
  padding: 2px 0 2px 0;
  text-align: center;
  margin: 3px;
`

const Container = styled.div`
  margin: 10px 0 10px 0;
`

const TypesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 300px;
`

const TypeTitle = styled.div`
  font-size: 24px;
  opacity: 0.6;
  text-transform: uppercase;
`

export { TypeDiv, Container, TypesContainer, TypeTitle }
