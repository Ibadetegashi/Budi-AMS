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
        <main>
          <Routes>
          <Route path='/' element={<HomeView/>} exact />
            <Route path='/product/:id' element={<ProductView/>} />
            </Routes>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>

  );
}

export default App;