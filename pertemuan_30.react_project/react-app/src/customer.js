import React from 'react';
import NavbarComp from './components/navbarComp';
import ListCustomer from './components/list_customer';
import AddCustomer from './components/add_customer';

import './App.css'
import 'bootstrap/dist/css/bootstrap.css';

export default function Dashboard() {
return (
  <div className="App">
  <NavbarComp/> 
  <br/>
  <br/>
  <h2>Customer List</h2>
  <br/>
  <AddCustomer/>
  <br/>
  <ListCustomer/>
  </div>
);
}
