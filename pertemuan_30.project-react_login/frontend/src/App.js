import React from 'react';
import './App.css';
import Login from './components/login';
import Dashboard from './components/dashboard'
import {AuthContextProvider} from './context/AuthContext'
import { BrowserRouter, Router} from 'react-router-dom'
import ProtectedRoute from './components/protectedRoute'

function App() {
  return (
    <AuthContextProvider>
       <BrowserRouter>
        <div className="App">
        <header className="App-header">
          <h1> Welcome to store</h1>
          <Router path='/' exact component={Login} />
          <ProtectedRoute path='/dashboard' component={Dashboard} />
        </header>
        </div>
       </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
