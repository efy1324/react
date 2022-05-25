import React from 'react';



class ProductDetails extends React.Component {
  state = { imgurl: "", productTitle: "", productPrice: null }

  componentDidMount() {
    const product = this.props.location.stateproduct
    this.setState({ imgurl: product.imageUrl, productTitle: product.title, productPrice: product.price });
  }
  render() {
    console.log(this.props.location.stateproduct);
    return (
      <div>
        ProductDetails
        <h1>{this.state.productTitle}</h1><br/>
        <img src={this.state.imgurl} alt="hello" />
       <h3>{this.state.productPrice}$</h3> 
      </div>
    );
  }
}

export default ProductDetails;