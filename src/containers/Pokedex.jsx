import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PokemonsContainer from '../components/PokemonsContainer/PokemonsContainer'
import HeadingPokedex from '../components/HeadingPokedex/HeadingPokedex'
import Header from '../components/Header/Header'
import Loader from '../components/Loader/Loader'
import MyError from '../components/MyError/MyError'
// Helmet causes warning about componentWillMount.
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

const Pokedex = ({ location, history }) => {
  const [isLoading, setLoading] = useState(false)
  const [data, setData] = useState({})
  const [error, setError] = useState(null)
  const urlParams = new URLSearchParams(location.search)
  const searchParam = urlParams.get('search') || ''

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const result = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=150')
        const pokeData = await result.data
        setLoading(false)
        setData(pokeData)
      } catch (error) {
        setError(error)
        throw error
      }
    }
    fetchData()
  }, [])

  const handleChange = (event) => {
    urlParams.set('search', event.currentTarget.value)
    history.push(`?${urlParams}`)
  }

  const pokedexElems = isLoading ? <Loader /> : (
    <>
      <HeadingPokedex search={searchParam} setSearch={handleChange} />
      <PokemonsContainer search={searchParam} pokemons={data.results} />
    </>
  )

  return (
    <>
      <Helmet>
        <title>Pokédex</title>
        <meta name='description' content='Pokédex' />
      </Helmet>
      <Header />
      {error ? <MyError message={error.message} /> : pokedexElems}
    </>
  )
}

Pokedex.propTypes = {
  location: PropTypes.object,
  history: PropTypes.object
}

export default Pokedex
