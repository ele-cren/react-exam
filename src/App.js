import React from 'react'
import Pokedex from './containers/Pokedex'
import Pokemon from './containers/Pokemon'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/:pokemon' component={Pokemon} />
        <Route path='/' component={Pokedex} />
      </Switch>
    </Router>
  )
}

export default App
