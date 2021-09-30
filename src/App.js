import './App.css';
import Navigation from './components/Navigation/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Foods from './components/Foods/Foods';
import Clients from './components/Clients/Clients';
import FoodDetail from './components/FoodDetail/FoodDetail';
import ClientDetai from './components/ClientDetail/ClientDetai';
import Footer from './components/Footer/Footer';
import Featured from './components/Featured/Featured';



function App() {
  return (
    <div className="App">


      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/featured'>
            <Featured></Featured>
          </Route>
          <Route path='/foods'>
            <Foods></Foods>
          </Route>
          <Route path='/food/:foodId'>
            <FoodDetail></FoodDetail>
          </Route>
          <Route path='/clients'>
            <Clients></Clients>
          </Route>
          <Route path='/user/:id'>
            <ClientDetai></ClientDetai>
          </Route>
        </Switch>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
