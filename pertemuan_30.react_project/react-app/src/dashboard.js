import React from 'react';
import NavbarComp from './components/navbarComp';
import Transaksi from './components/modal_transaksi';
import History from './components/table-history';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';

export default function Dashboard() {
return (
  <div className="App">
  <NavbarComp/> 
  <br/>
  <br/>
  <h2>WELCOME NIDA</h2>
  <Transaksi/>
  <br/>
  <History/>
  </div>
);
}
