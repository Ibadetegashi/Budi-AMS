import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeView from './views/HomeView';
import ProductView from './views/ProductView';

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">
              BUDI
            </a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
          </div>
        </header>
        <Routes>
          <Route path="/product/:id" component={ProductView}></Route>
          <Route path="/" component={HomeView} exact></Route>
        </Routes>
        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>

  );
}

export default App;