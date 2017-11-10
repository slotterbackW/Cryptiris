import React from 'react';
import { Route, Link } from 'react-router-dom'

const Home = () => (<h1> Home </h1>)
const About = () => (<h1> About </h1>)

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/about">about</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </main>
  </div>
)

export default App