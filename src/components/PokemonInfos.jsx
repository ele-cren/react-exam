import React from 'react'

const PokemonInfos = ({ height, weight, abilities }) => {
  if (height && weight && abilities) {
    const abilitiesList = abilities.map((x, i) => {
      return <li key={ i }>{ x.ability.name }</li>
    })
    return (
      <div>
        <h1>Height : { height }</h1>
        <h1>Weight : { weight }</h1>
        <ul>
          { abilitiesList }
        </ul>
      </div>
    )
  }
  return ''
}

export default PokemonInfos
