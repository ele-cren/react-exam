import React from 'react'

const Search = ({ search, setSearch }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} >
    <label>
      Search
      <input type="text" name="search" value={ search } onChange={ setSearch } /> 
    </label>
    </form>
  )
}

export default Search
