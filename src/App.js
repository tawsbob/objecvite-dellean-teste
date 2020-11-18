import { Home } from './pages'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { ApiProvider } from './components'


const WithRoute = (Component, path)=>(
  <Route exact path={path}>
    <Component />
  </Route>
)

function App() {

  return (
    <Router>
      <Switch>
          <ApiProvider>
            { WithRoute(Home, '/') }
          </ApiProvider>
        </Switch>
    </Router>
  );
}

export default App;
