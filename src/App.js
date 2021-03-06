import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { CategoryPage } from './pages/CategoryPage'
import { NotFound } from './pages/NotFound'
import { Recipe } from './pages/Recipe'
import './App.css'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main className='container content'>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/category/:name' component={CategoryPage} />
            <Route path='/meal/:id' component={Recipe} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </>
  )
}

export default App
