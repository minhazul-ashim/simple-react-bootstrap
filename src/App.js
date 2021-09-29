import './App.css';
import Navigation from './components/Navigation/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Foods from './components/Foods/Foods';
import Clients from './components/Clients/Clients';



function App() {
  return (
    <div className="App">


      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/foods'>
            <Foods></Foods>
          </Route>
          <Route path='/clients'>
            <Clients></Clients>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
