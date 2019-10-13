import React from 'react'
import { Container, Message } from '../styles/components/_MyError'
import PropTypes from 'prop-types'

const MyError = ({ message }) => {
  return (
    <Container>
      <Message>{message}. The pokémon you are looking for may not exist.</Message>
    </Container>
  )
}

MyError.propTypes = {
  message: PropTypes.string
}

export default MyError
