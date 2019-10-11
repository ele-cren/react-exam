import React from 'react'

const Search = ({ search, setSearch }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} >
      <input type="text" name="search" value={ search } onChange={ setSearch } /> 
    </form>
  )
}

export default Search
