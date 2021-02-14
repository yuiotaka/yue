import React from 'react';
import Nabvar from './components/Navbar.js';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home.js';
import aboutme from './components/pages/Aboutme.js';
import article from './components/pages/Article.js';


function App() {
  return (
    <>
    <Router>
       <Nabvar />
       <Switch>
       <Route path='/' exact component={Home} />
       <Route path='/aboutme' component={aboutme} />
       <Route path='/article' component={article} />
       </Switch>
       </Router>
      </>
  );
}




export default App;