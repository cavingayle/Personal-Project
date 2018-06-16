import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import AdminNav from './components/Admin/AdminNav';
import AdminAddProduct from './components/Admin/AdminAddProduct';
import AdminEditProduct from './components/Admin/AdminEditProduct';
import StripeCheckout from './components/Checkout/StripeCheckout';
import OrderConfirmation from './components/Checkout/OrderConfirmation';
import redirect from './components/Redirect/Redirect';



const routes = 
  <Switch>
     <Route exact path='/' component={ Home } />
     <Route path='/products' component={ Products } />
     <Route path='/product' component={ Product } />
     <Route path='/cart' component={ Cart } />
     <Route path='/checkout' component={ Checkout } />
     <Route path='/stripecheckout' component={ StripeCheckout } />
     <Route path='/orderconfirmation:orderNumber' component={ OrderConfirmation } />
     <Route path='/redirect' component={ Redirect } />
     <Route path='/admin' component={ AdminNav } /> 
     <Route path='/adminaddproduct' component={ AdminAddProduct } />
     <Route path='/admineditproduct' component={ AdminEditProduct } />
  </Switch>


export default routes;