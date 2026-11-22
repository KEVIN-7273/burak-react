import { Button } from "@mui/material";
import { Box, Container, Stack, width } from "@mui/system";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";
import React, { useEffect, useState } from "react";

import { CartItem } from "../../../lib/types/search";
interface HomeNavbarProps {
  cartItems: CartItem[];
  onDelete: (item: CartItem) => void;
  onDeleteAll: () => void;
  onRemove: (item: CartItem) => void;
  onAdd: (item: CartItem) => void;
}
export default function HomeNavbar(props: HomeNavbarProps) {
  const { cartItems, onDelete, onDeleteAll, onRemove, onAdd } = props;
  const authMember = null;
  const [count, setCount] = useState<number>(0);
  const [value, setValue] = useState<boolean>(true);

  useEffect(() => {
    console.log("componentDidMount", count); // Data FETCH
    setCount(count + 1);

    return () => {
      console.log("componentWillUnmount");
    };
  }, [value]);

  /** HANDLERS **/

  const buttonHandler = () => {
    setValue(!value);
  };
  return (
    <div className="home-navbar">
      <Container className="navbar-container">
        <Stack className="menu">
          <Box>
            <NavLink to="/">
              <img className="brand-logo" src="/icons/burak.svg" />
            </NavLink>
          </Box>

          <Stack className="links">
            <Box className={"hover-line"}>
              <NavLink to="/" activeClassName={"underline"}>
                Home
              </NavLink>
            </Box>
            <Box className={"hover-line"}>
              <NavLink to="/products" activeClassName={"underline"}>
                Products
              </NavLink>
            </Box>
            {authMember ? (
              <Box className={"hover-line"}>
                <NavLink to="/Orders" activeClassName={"underline"}>
                  Orders
                </NavLink>
              </Box>
            ) : null}
            {authMember ? (
              <Box className={"hover-line"}>
                <NavLink to="/member-page" activeClassName={"underline"}>
                  My Page
                </NavLink>
              </Box>
            ) : null}
            <Box className={"hover-line"}>
              <NavLink to="/help" activeClassName={"underline"}>
                Help
              </NavLink>
            </Box>
            <Basket
              cartItems={cartItems}
              onDelete={onDelete}
              onDeleteAll={onDeleteAll}
              onRemove={onRemove}
              onAdd={onAdd}
            />
            {!authMember ? (
              <Box className={"hover-line"}>
                <Button variant="contained" className="login-button">
                  Login
                </Button>
              </Box>
            ) : (
              <img
                className="user-avatar"
                src={"/icons/default-user.svg"}
                aria-haspopup={"true"}
              />
            )}
          </Stack>
        </Stack>

        <Stack className="header-frame">
          <Stack className="detail">
            <Box className="head-main-txt">World's Most Delicious Cousine</Box>
            <Box className="well-txt">The Choice, not just a choice</Box>
            <Box className="service-txt">{count} hours service</Box>
            <Box className="signup">
              {" "}
              {!authMember ? (
                <Button
                  variant="contained"
                  className={"signup-button"}
                  onClick={buttonHandler}
                >
                  SIGN UP
                </Button>
              ) : null}{" "}
            </Box>
          </Stack>
          <Stack className="logo-frame">
            <div className="logo-img"></div>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
