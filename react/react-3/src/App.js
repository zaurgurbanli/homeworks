import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './style.css'

import {Homepage} from './pages/Homepage';
import {ShopCart} from './pages/ShopCart';
import {Favourites} from './pages/Favourites';

import {Layout} from './commons';


function App() {

  
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/cart" component={ShopCart} />
          <Route path="/fav" component={Favourites} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;