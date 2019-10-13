import React from 'react'
import { Container, Message, HomeLink } from './style'
import PropTypes from 'prop-types'

const MyError = ({ message }) => {
  return (
    <Container>
      <Message>{message}<br />Go back to <HomeLink to='/'>Home</HomeLink></Message>
    </Container>
  )
}

MyError.propTypes = {
  message: PropTypes.string
}

export default MyError
