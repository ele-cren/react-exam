import React from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Container, HeadingContainer, PokedexTitle, Form, SearchIcon, Input } from './style'
import PropTypes from 'prop-types'

const HeadingPokedex = ({ search, setSearch }) => {
  return (
    <Container>
      <HeadingContainer>
        <PokedexTitle>Pokédex</PokedexTitle>
        <Form onSubmit={(e) => e.preventDefault()}>
          <SearchIcon icon={faSearch} />
          <Input type='text' name='search' value={search} onChange={setSearch} />
        </Form>
      </HeadingContainer>
    </Container>
  )
}

HeadingPokedex.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func
}

export default HeadingPokedex
