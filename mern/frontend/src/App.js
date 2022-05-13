import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeView from './Views/HomeView';
import ProductView from './Views/ProductView';

function App() {
  return (
     <BrowserRouter>
      <div>
        <header>
          <Link to="/">amazona</Link>
        </header>
        <main>
          <Routes>
            <Route path="/product/:slug" element={<ProductView />} />
            <Route path="/" element={<HomeView />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
