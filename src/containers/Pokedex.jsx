import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PokemonsContainer from '../components/PokemonsContainer'
import HeadingPokedex from '../components/HeadingPokedex'
import Header from '../components/Header'
import Loader from '../components/Loader'
import MyError from '../components/MyError'
//Helmet causes alert about componentWillMount.
import Helmet from 'react-helmet'
 
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
    const pokedexElems =  isLoading ? <Loader /> : (
        <React.Fragment>
            <HeadingPokedex search={ searchParam } setSearch={ handleChange } />
            <PokemonsContainer search={ searchParam } pokemons={ data.results } />
        </React.Fragment>
    )
    return (
        <React.Fragment>
            <Helmet>
                <title>Pokedex</title>
                <meta name="description" content="Pokedex" />
            </Helmet>
            <Header />
            { error ? <MyError message={ error.message } /> : pokedexElems }
        </React.Fragment>
    )
}

export default Pokedex
