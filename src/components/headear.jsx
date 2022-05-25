import React from 'react';
import { NavLink } from 'react-router-dom';
// import Products from './products1';



class Header extends React.Component {
  state = {}
  render() {
    return (
      <nav>
        <NavLink to="/">home</NavLink>
        <NavLink to="/products"> Products </NavLink>
      </nav >
    );
  }
}

export default Header;