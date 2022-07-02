import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import HomeView from "./views/HomeView";
import ProductView from "./views/ProductView";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Badge from "react-bootstrap/Badge";
import Nav from "react-bootstrap/Nav";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import { useContext, useState, useEffect } from "react";
import { Store } from "./Store";
import CartView from "./views/CartView";
import SigninView from "./views/SigninView";
import ShippingAddresView from "./views/ShippingAddresView";
import SignupView from "./views/SignupView";
import PaymentMethodView from "./views/PaymentMethodView";
import AuthRoute from "./components/AuthRoute";
import DashboardView from "./views/DashboardView";
import AdminRoute from "./components/AdminRoute";
import ProfileView from "./views/ProfileView";
import ProductEditView from "./views/ProductEditView";
import PlaceOrderView from "./views/PlaceOrderView";
import UserListView from "./views/UserListView";
import UserEditView from "./views/UserEditView";
import ProductListView from "./views/ProductListView";
import OrderView from "./views/OrderView";
import SearchView from "./views/SearchView";
import OrderHistoryView from "./views/OrderHistoryView";
import Button from "react-bootstrap/Button";
import { getError } from "./utils";
import axios from "axios";
import SearchBox from "./components/SearchBox";
import OrderListView from "./views/OrderListView";
import MapView from "./views/MapView";
import ProtectedRoute from './components/ProtectedRoute';
import SellerRoute from './components/SellerRoute';
import Footer from "./components/Footer";

function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { fullBox, cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: "USER_SIGNOUT" });
    localStorage.removeItem("userInfo");
    localStorage.removeItem("shippingAddress");
    localStorage.removeItem("paymentMethod");
    window.location.href = "/signin";
  };

  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(`/api/products/categories`);
        setCategories(data);
      } catch (err) {
        toast.error(getError(err));
      }
    };
    fetchCategories();
  }, []);
  return (
    <BrowserRouter>
      <div
        className={
          sidebarIsOpen
            ? fullBox
              ? "site-container active-cont d-flex flex-column full-box"
              : "site-container active-cont d-flex flex-column"
            : fullBox
              ? "site-container d-flex flex-column full-box"
              : "site-container d-flex flex-column"
        }
      >
        <ToastContainer position="bottom-center" limit={1} />
        <header>
          <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
              <Button
                variant="dark"
                onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
              >
                <i className="fas fa-bars"></i>
              </Button>
              <LinkContainer to="/">
                <Navbar.Brand>AMS</Navbar.Brand>
              </LinkContainer>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <SearchBox />
                <Nav className="me-auto  w-100  justify-content-end">
                  <Link to="/cart" className="nav-link">
                    <i className="fa fa-shopping-cart" />
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
                  {userInfo && userInfo.isSeller && (
                    // <div className="dropdown">
                    //   <Link to="#admin">
                    //     Seller <i className="fa fa-caret-down"></i>
                    //   </Link>
                    //   <ul className="dropdown-content">
                    //     <li>
                    //       <Link to="/productlist/seller">Products</Link>
                    //     </li>
                    //     <li>
                    //       <Link to="/orderlist/seller">Orders</Link>
                    //     </li>
                    //   </ul>
                    // </div>
                    <NavDropdown title="Seller" id="admin-nav-dropdown">
                      <LinkContainer to="/productlist/seller">
                        <NavDropdown.Item>Products</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/orderlist/seller">
                        <NavDropdown.Item>Orders</NavDropdown.Item>
                      </LinkContainer>
                    </NavDropdown>
                  )}
                  {userInfo && userInfo.isAdmin && (
                    <NavDropdown title="Admin" id="admin-nav-dropdown">
                      <LinkContainer to="/admin/dashboard">
                        <NavDropdown.Item>Dashboard</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/admin/products">
                        <NavDropdown.Item>Products</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/admin/orders">
                        <NavDropdown.Item>Orders</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/admin/users">
                        <NavDropdown.Item>Users</NavDropdown.Item>
                      </LinkContainer>
                    </NavDropdown>
                  )}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
        <div
          className={
            sidebarIsOpen
              ? "active-nav side-navbar d-flex justify-content-between flex-wrap flex-column"
              : "side-navbar d-flex justify-content-between flex-wrap flex-column"
          }
        >
          <Nav className="flex-column text-white w-100 p-2">
            <Nav.Item>
              <strong>Categories</strong>
            </Nav.Item>
            {categories.map((category) => (
              <Nav.Item key={category}>
                <LinkContainer
                  to={`/search?category=${category}`}
                  onClick={() => setSidebarIsOpen(false)}
                >
                  <Nav.Link>{category}</Nav.Link>
                </LinkContainer>
              </Nav.Item>
            ))}
          </Nav>
        </div>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route
                path="/admin/product/:id"
                element={
                  <AdminRoute>
                    <ProductEditView />
                  </AdminRoute>
                }
              ></Route>
              <Route path="/product/:slug" element={<ProductView />} />
              <Route path="/cart" element={<CartView />} />
              <Route path="/" element={<HomeView />} />
              <Route path="/signin" element={<SigninView />} />
              <Route path="/signup" element={<SignupView />} />
              {/* <Route path="/seller/:id" element={<SellerView />}></Route> */}
              <Route path="/seller/:id" component={SearchView}></Route>
              
              <Route
                path="/map"
                element={
                  <ProtectedRoute>
                    <MapView />
                  </ProtectedRoute>
                }
              />
              <Route path="/placeorder" element={<PlaceOrderView />} />
              <Route path="/search" element={<SearchView />} />
              <Route path="/order/:id" element={<OrderView />} />
              <Route
                path="/profile"
                element={
                  <AuthRoute>
                    <ProfileView />
                  </AuthRoute>
                }
              />
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
                    <OrderHistoryView />
                  </AuthRoute>
                }
              ></Route>
              <Route path="/shipping" element={<ShippingAddresView />}></Route>
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
                path="/admin/users"
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
              <Route
                path="/admin/orders"
                element={
                  <AdminRoute>
                    <OrderListView />
                    exact
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="/admin/products"
                element={
                  <AdminRoute>
                    <ProductListView />
                    exact
                  </AdminRoute>
                }
              ></Route>

              <Route
                path="/productlist/seller"
                element={
                  <SellerRoute>
                    <ProductListView />
                  </SellerRoute>
                }
              ></Route>

              <Route
                path="/orderlist/seller"
                element={
                  <SellerRoute         >
                    <OrderListView />
                  </SellerRoute>
                }
              ></Route>
              {/* <SellerRoute
                path="/productlist/seller"
                element={ProductListView}
              ></SellerRoute>
              <SellerRoute
                path="/orderlist/seller"
                element={OrderListView}
              ></SellerRoute> */}
            </Routes>
          </Container>
        </main>
        <footer>
        <Footer></Footer>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
