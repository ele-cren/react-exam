import React from 'react'
import { Container, Message } from '../styles/components/_MyError'

const MyError = ({ message }) => {
  return (
    <Container>
      <Message>{ message }</Message>
    </Container>
  )
}

export default MyError
