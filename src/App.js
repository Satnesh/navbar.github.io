import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Counter from './pages/Counter';
import Support from './pages/Support';
import About from './pages/About';
import Calculator from './pages/Calculator';
import Users from './pages/Users';
import Gallery from './pages/Gallery';
import Revenue from './pages/Revenue';
import User from './pages/User';

import Model from './pages/Model';
import Mobile from './pages/Mobile';
import Gallery1 from './pages/Gallery1';
import Gallery2 from './pages/Gallery2';


function App() {
  
  return (
    <>
    
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/counter' exact component={Counter} />
          <Route exact path='/counter/users' exact component={User} />
          
          <Route exact path='/counter/revenue' exact component={Revenue} />


          <Route exact path='/slider' component={About} />
          <Route exact path='/slider/model' component={Model} />
          <Route exact path='/slider/mobile' component={Mobile} />
         

          <Route exact path='/calculators' component={Calculator} />
         
          <Route exact path='/users' component={Users} />
          <Route exact path='/gallery' component={Gallery} />
          <Route exact path='/gallery/gallery1' component={Gallery1} />
          <Route exact path='/gallery/gallery2' component={Gallery2} />

         
          <Route exact path='/support' component={Support} />

        </Switch>
      </Router>
    </>
  );
}

export default App;
