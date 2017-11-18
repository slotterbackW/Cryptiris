import React from 'react';
import { Route } from 'react-router-dom'

import './App.css'

import Home from '../Home'
import Login from '../Login'
import SignUp from '../SignUp'
import Dashboard from '../Dashboard'
import Browse from '../Browse'

const App = () => (
  <div>
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/sign-up" component={SignUp} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/browse" component={Browse} />
    </main>
  </div>
)

export default App
