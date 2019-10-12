import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PokemonContainer from '../components/PokemonContainer'
import Header from '../components/Header'

const Pokemon = (props) => {
    const [isLoading, setLoading] = useState(false)
    const [data, setData] = useState({})
    const [species, setSpecies] = useState({})
    const [error, setError] = useState(null)
    const { pokemon } = props.match.params

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${ pokemon }`)
                const data = await res.data
                const resSpecies = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${ pokemon }`)
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
    const pokemonElems = (
        <React.Fragment>
            <Header />
            <PokemonContainer pokemon={ data } species={ species } />
        </React.Fragment>
    )
    return error ? error.message : isLoading ? 'Loading...' : pokemonElems
}

export default Pokemon
