import React from 'react'
import Pokedex from './containers/Pokedex'
import Pokemon from './containers/Pokemon'
import Header from './components/Header/Header'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/:pokemon' component={Pokemon} />
        <Route path='/' component={Pokedex} />
      </Switch>
    </Router>
  )
}

export default App
