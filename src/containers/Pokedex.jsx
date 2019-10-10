import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PokedexDisplay from '../components/PokedexDisplay'
 
const Pokedex = () => {
    const [isLoading, setLoading] = useState(false)
    const [data, setData] = useState({})
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const result = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=150')
                const pokeData = await result.data
                setData(pokeData)
                setLoading(false)
            } catch (error) {
                setError(error)
                throw error
            }
        }
        fetchData()
    }, [])

    return error ? error.message : isLoading ? 'Loading...' : <PokedexDisplay pokemons={ data.results } />
}

export default Pokedex
