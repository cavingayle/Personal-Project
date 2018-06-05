import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';
import Admin from './components/Admin/Admin';



const routes = 
  <Switch>
     <Route exact path="/" component={ Home } />
     <Route path="/products" component={ Products } />
     <Route path="/product" component={ Product } />
     <Route path="/cart" component={ Cart } />
     <Route path="/admin" component={ Admin } /> 
  </Switch>


export default routes;