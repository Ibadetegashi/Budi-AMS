import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomeView from "./Views/HomeView";
import ProductView from "./Views/ProductView";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar bg="dark" varian="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>Budi</Navbar.Brand>
              </LinkContainer>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container>
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
