import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PokemonCard from '../components/PokemonCard'
 
const Pokedex = () => {
    const [isLoading, setLoading] = useState(false)
    const [data, setData] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const result = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=150')
                const pokeData = await result.data
                setData(pokeData)
                setLoading(false)
            } catch (error) {
                throw error
            }
        }
        fetchData()
    }, [])

    let pokemonList = ''
    if (data.results) {
        pokemonList = data.results.map((x, i) => {
            return <PokemonCard key={ i } name={ x.name } />
        })
    }

    return isLoading ? 'Loading...' : pokemonList
}

export default Pokedex