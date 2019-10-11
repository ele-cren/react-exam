import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PokedexDisplay from '../components/PokedexDisplay'
import Search from '../components/Search'
 
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
                setLoading(false)
                setData(pokeData)
            } catch (error) {
                setError(error)
                throw error
            }
        }
        fetchData()
    }, [])
    const pokedexElems = (
        <div>
            <Search />
            <PokedexDisplay pokemons={ data.results } />
        </div>
    )
    return error ? error.message : isLoading ? 'Loading...' : pokedexElems
}

export default Pokedex
