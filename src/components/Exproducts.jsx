import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './headear';
import HomePage from './HomePage';
import Products from './products';
import ProductDetails from './ProductDetail';

class Exproducts extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={HomePage} />
          <Route path="/products" exact component={Products} />
          <Route path="/products/:id"  component={ProductDetails} />
        </div>
      </BrowserRouter>
    );
  }
}

export default Exproducts;