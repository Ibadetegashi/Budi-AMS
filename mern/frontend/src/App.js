import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import HomeView from "./views/HomeView";
import ProductView from "./views/ProductView";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { useContext } from 'react';
import { Store } from './Store';
import CartView from './views/CartView';
import SigninView from "./views/SigninView";
import ShippingAddresView from './views/ShippingAddresView';
import SignupView from './views/SignupView';
import PaymentMethodView from "./views/PaymentMethodView";
import AuthRoute from './components/AuthRoute';
import DashboardView from './views/DashboardView';
import AdminRoute from './components/AdminRoute';
// import ProfileView from './views/ProfileView';

import PlaceOrderView from "./views/PlaceOrderView";
import UserListView from "./views/UserListView";
import UserEditView from "./views/UserEditView";
import OrderView from "./views/OrderView";

function App() {

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
  };
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <ToastContainer position="bottom-center" limit={1} />
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>Budi</Navbar.Brand>
              </LinkContainer>
              <Nav className="me-auto">
                <Link to="/cart" className="nav-link">
                  Cart
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </Badge>
                  )}
                </Link>
                {userInfo ? (
                  <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>User Profile</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/orderhistory">
                      <NavDropdown.Item>Order History</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Divider />
                    <Link
                      className="dropdown-item"
                      to="#signout"
                      onClick={signoutHandler}
                    >
                      Sign Out
                    </Link>
                  </NavDropdown>
                ) : (
                  <Link className="nav-link" to="/signin">
                    Sign In
                  </Link>
                )}
                {userInfo && userInfo.isAdmin && (
                  <NavDropdown title="Admin" id="admin-nav-dropdown">
                    <LinkContainer to="/admin/dashboard">
                      <NavDropdown.Item>Dashboard</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/admin/productlist">
                      <NavDropdown.Item>Products</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/admin/orderlist">
                      <NavDropdown.Item>Orders</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/admin/userlist">
                      <NavDropdown.Item>Users</NavDropdown.Item>
                    </LinkContainer>
                  </NavDropdown>
                )}
              </Nav>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/product/:slug" element={<ProductView />} />
              <Route path="/cart" element={<CartView />} />
              <Route path="/" element={<HomeView />} />
              <Route path="/signin" element={<SigninView />} />
              <Route path="/signup" element={<SignupView />} />
              <Route path="/placeorder" element={<PlaceOrderView/>} />
             {/* <Route path="/order/:id" element={<OrderView/>} /> */}
              {/* <Route
                path="/profile"
                element={
                  <AuthRoute>
                    <ProfileView />
                  </AuthRoute>
                }
              /> */}
              <Route
                path="/order/:id"
                element={
                  <AuthRoute>
                    <OrderView />
                  </AuthRoute>
                }
              ></Route>
              <Route
                path="/orderhistory"
                element={
                  <AuthRoute>
                    {/* <OrderHistoryView /> */}
                  </AuthRoute>
                }
              ></Route>
              <Route
                path="/shipping"
                element={<ShippingAddresView />}
              ></Route>
              <Route path="/payment" element={<PaymentMethodView />}></Route>
              <Route
                path="/admin/dashboard"
                element={
                  <AdminRoute>
                    <DashboardView />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/admin/userlist"
                element={
                  <AdminRoute>
                    <UserListView />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/admin/user/:id"
                element={
                  <AdminRoute>
                    <UserEditView />
                  </AdminRoute>
                }
              ></Route>

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
