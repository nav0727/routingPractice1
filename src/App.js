import {Switch, Route} from 'react-router-dom'

import About from './components/About'

import Home from './components/Home'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import Header from './components/Header'

import './App.css'

const App = () => (
  <div className="bg1">
    <div className="bg">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </div>
)

export default App
