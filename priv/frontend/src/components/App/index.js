import React from 'react';
import { Route, Link } from 'react-router-dom'

import './App.css'

import Nav from '../Nav'
import Home from '../Home'
import Login from '../Login'
import SignUp from '../SignUp'
import Dashboard from '../Dashboard'

const About = () => (<h1> About </h1>)

const App = () => (
  <div>
    <Nav />

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/sign-up" component={SignUp} />
      <Route exact path="/dashboard" component={Dashboard} />
    </main>
  </div>
)

export default App
