import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import Data from './Store';
import ProductDetails from './ProductDetail';
import { Route } from 'react-router-dom';

class Products extends React.Component {
  state = { data: [] }
  componentDidMount() {
    this.setState({ data: Data });
  }
  gettingTitleProducts = () => {
    return this.state.data.map(product =>
      <NavLink
        key={product.id}
        to={{
          pathname: `/products/:${product.id}`,
          stateproduct: product,
        }}
      >
        <span>{product.title}</span><br/>
      </NavLink>
    )}


  render() {
    return (
      <div>
        {this.gettingTitleProducts()}
      </div>
    );
  }
}

export default Products;