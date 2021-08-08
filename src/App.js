import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from './Components/Cart/cart';
import Footer from './Components/Footer/footer';
import Header from './Components/Header/header';
import Home from './Components/Home/home';
import Product from './Components/Product/product';
import Success from './Components/Success/success';
//all the routes will change onclick which are set to their link
//path="/" will lead to reset the page

const App = () => {
  return ( <BrowserRouter>
  <Header />
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/product/:id" component={Product} />
    <Route path="/cart" component={Cart} />
    <Route path="/success" component={Success} />
  </Switch>
  <Footer />
  </BrowserRouter> );}
 
export default App;