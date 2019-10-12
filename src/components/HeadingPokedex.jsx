import React from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Container, HeadingContainer, PokedexTitle, Form, SearchIcon, Input } from '../styles/components/_HeadingPokedex'

const HeadingPokedex = ({ search, setSearch }) => {
  return (
    <Container>
    <HeadingContainer>
      <PokedexTitle>Pokémon List</PokedexTitle>
      <Form onSubmit={(e) => e.preventDefault()} >
        <SearchIcon icon={ faSearch } />
        <Input type="text" name="search" value={ search } onChange={ setSearch } /> 
      </Form>
    </HeadingContainer>
    </Container>
  )
}

export default HeadingPokedex
