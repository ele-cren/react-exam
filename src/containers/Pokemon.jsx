import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PokemonContainer from '../components/PokemonContainer/PokemonContainer'
import { capitalizeString } from '../utils'
import Header from '../components/Header/Header'
import Loader from '../components/Loader/Loader'
import MyError from '../components/MyError/MyError'
// Helmet causes warning about componentWillMount.
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

const Pokemon = ({ match }) => {
  const [isLoading, setLoading] = useState(false)
  const [data, setData] = useState({})
  const [species, setSpecies] = useState({})
  const [error, setError] = useState(null)
  const { pokemon } = match.params

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        const data = await res.data
        const resSpecies = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}`)
        const speciesData = await resSpecies.data
        setData(data)
        setSpecies(speciesData)
        setLoading(false)
      } catch (error) {
        setError(error)
        throw error
      }
    }
    fetchData()
  }, [pokemon])

  const capitalizedName = capitalizeString(data.name)
  const pokemonElems = isLoading ? <Loader /> : <PokemonContainer pokemon={data} species={species} />

  return (
    <>
      <Helmet>
        <title>{capitalizedName}</title>
        <meta name='description' content={capitalizedName} />
      </Helmet>
      <Header />
      {error ? <MyError message={error.message} /> : pokemonElems}
    </>
  )
}

Pokemon.propTypes = {
  match: PropTypes.object
}

export default Pokemon
