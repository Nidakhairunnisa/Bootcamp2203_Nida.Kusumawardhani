import React from 'react';
import NavbarComp from './components/navbarComp';
import ListProduct from './components/list_product';
import AddProduct from './components/add_product';

import './App.css'
import 'bootstrap/dist/css/bootstrap.css';

export default function Dashboard() {
return (
  <div className="App">
  <NavbarComp/> 
  <br/>
  <br/>
  <h2>Product List</h2>
  <br/>
  <AddProduct/>
  <br/>
  <ListProduct/>
  </div>
);
}
