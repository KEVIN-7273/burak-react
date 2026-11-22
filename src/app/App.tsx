import React from "react";
import { Link, Route, Switch, useLocation } from "react-router-dom";
import Container from "@mui/system";
import HomePage from "./screens/homePage";
import ProductsPage from "./screens/productsPage";
import OrdersPage from "./screens/ordersPage";
import UserPage from "./screens/userPage";
import HomeNavbar from "./components/headers/HomeNavbar";
import OtherNavbar from "./components/headers/OtherNavbar";
import Footer from "./components/footer";
import HelpPage from "./screens/helpPage";
import Test from "./screens/Test";
import useBasket from "./hooks/useBasket";
import "../css/app.css";
import "../css/navbar.css";
import "../css/footer.css";

function App() {
  const location = useLocation();
  const { onAdd, cartItems, onDelete, onDeleteAll, onRemove } = useBasket();

  /** HANDLERS **/

  return (
    <>
      {location.pathname === "/" ? (
        <HomeNavbar
          cartItems={cartItems}
          onAdd={onAdd}
          onDelete={onDelete}
          onDeleteAll={onDeleteAll}
          onRemove={onRemove}
        />
      ) : (
        <OtherNavbar
          cartItems={cartItems}
          onAdd={onAdd}
          onDelete={onDelete}
          onDeleteAll={onDeleteAll}
          onRemove={onRemove}
        />
      )}
      <Switch>
        <Route path="/products">
          <ProductsPage onAdd={onAdd} />
        </Route>
        <Route path="/orders">
          <OrdersPage />
        </Route>
        <Route path="/member-page">
          <UserPage />
        </Route>
        <Route path="/help">
          <HelpPage />
        </Route>
        <Route path="/">
          {/* <Test /> */}
          <HomePage />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
