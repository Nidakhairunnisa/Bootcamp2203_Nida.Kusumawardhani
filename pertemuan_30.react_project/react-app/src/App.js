import React from 'react';
import Dashboard from './dashboard';
import Customer from './customer'
import Product from './product'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';

export default function App() {
return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/customer" element={<Customer />} />
    <Route path="/product" element={<Product />} />
  </Routes>
</BrowserRouter>
);
}
