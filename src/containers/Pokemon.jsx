import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PokemonContainer from '../components/PokemonContainer'

const Pokemon = (props) => {
    const [isLoading, setLoading] = useState(false)
    const [data, setData] = useState({})
    const [error, setError] = useState(null)
    const { pokemon } = props.match.params

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${ pokemon }`)
                const data = await res.data
                setLoading(false)
                setData(data)
            } catch (error) {
                setError(error)
                throw error
            }
        }
        fetchData()
    }, [pokemon])
    return error ? error.message : isLoading ? 'Loading...' : <PokemonContainer pokemon={ data } />
}

export default Pokemon
