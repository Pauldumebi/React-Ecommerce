import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import './App.css';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import CartScreen from './Screens/CartScreen'

function App() {

  const openMenu = function () {
    document.querySelector(".sidebar").classList.add("open");
  }

  const closeMenu = function () {
    document.querySelector(".sidebar").classList.remove("open")
  }

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
              <a onClick={openMenu}className="brand-button">
                &#9776;
              </a>
              <Link to='/'>Johetty-Stores</Link>
              {/* <a href="./index.html">
                Johetty-Stores
              </a> */}
          </div>
          <div className="header-links">
              <a href="cart.html">Cart</a>
              <a href="signin.html">sign In</a>
          </div>
        </header>
        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <a onClick={closeMenu}> <i className="fa fa-times"></i> </a>
          <ul>
              <li>
                <a href="index.html">Shirts</a>
              </li>
              <li>
                <a href="index.html">Trousers</a>
              </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path='/' exact ={true} component={HomeScreen}/>
              
          </div>
        </main>
        <footer className="footer">All right reserved.</footer>   
      </div>
    </BrowserRouter>
    
  );
}

export default App;
