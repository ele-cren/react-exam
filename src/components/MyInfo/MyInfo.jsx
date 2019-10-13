import React from 'react'
import { Container, Message } from './style'
import PropTypes from 'prop-types'

const MyInfo = ({ message }) => {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  )
}

MyInfo.propTypes = {
  message: PropTypes.string
}

export default MyInfo
