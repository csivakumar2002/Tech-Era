import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Home from './components/Home'
import CourseItemDetails from './components/CourseItemDetails'
import NotFound from './components/NotFound'

const App = () => (
  <Router>
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
        alt="website logo"
      />
    </Link>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/courses/:id" component={CourseItemDetails} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)

export default App
