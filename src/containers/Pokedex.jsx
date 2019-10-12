import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PokemonsContainer from '../components/PokemonsContainer'
import HeadingPokedex from '../components/HeadingPokedex'
import Header from '../components/Header'
//Helmet causes alert about componentWillMount.
import Helmet from 'react-helmet'
import Loader from '../components/Loader'
 
const Pokedex = (props) => {
    const [isLoading, setLoading] = useState(false)
    const [data, setData] = useState({})
    const [error, setError] = useState(null)
    const urlParams = new URLSearchParams(props.location.search)
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
        props.history.push(`?${ urlParams }`)
    }

    const pokedexElems = (
        <React.Fragment>
            <Helmet>
                <title>Pokedex</title>
                <meta name="description" content="Pokedex" />
            </Helmet>
            <Header />
            { isLoading ? <Loader /> : (
                <React.Fragment>
                    <HeadingPokedex search={ searchParam } setSearch={ handleChange } />
                    <PokemonsContainer search={ searchParam } pokemons={ data.results } />
                </React.Fragment>
            ) }
        </React.Fragment>
    )
    return error ? error.message : pokedexElems
}

export default Pokedex
