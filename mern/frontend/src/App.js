import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import HomeView from "./Views/HomeView";
import ProductView from "./Views/ProductView";
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { useContext } from 'react';
import { Store } from './Store';

function App() {
  const { state } = useContext(Store);
  const { cart } = state;
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar bg="dark" varian="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>Budi</Navbar.Brand>
              </LinkContainer>
              <Nav className="me-auto">
                <Link to="/cart" className="nav-link">
                  Cart
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.length}
                    </Badge>
                  )}
                </Link>
              </Nav>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/product/:slug" element={<ProductView />} />
              <Route path="/" element={<HomeView />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center" > All right reserved! </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
