import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Pokemon = (props) => {
    const [isLoading, setLoading] = useState(false)
    const [data, setData] = useState({})
    const [error, setError] = useState(null)
    
    const { id } = props.location.state

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${ id }`)
                const data = await res.data
                setData(data)
                setLoading(false)
            } catch (error) {
                setError(error)
                throw error
            }
        }
        fetchData()
    }, [])
}