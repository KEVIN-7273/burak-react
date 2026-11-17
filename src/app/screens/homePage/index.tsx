import { Container } from "@mui/system";
import React, { useEffect } from "react";
import Advertisment from "./Advertisment";
import Events from "./Events";
import NewDishes from "./NewDishes";
import PopularDishes from "./PopularDishes";
import ActiveUsers from "./ActiveUsers";
import Statistics from "./Statistics";
import "../../../css/home.css";

import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setPopularDishes } from "./slice";
import { Product } from "../../../lib/types/product";
import { ProductCollection } from "../../../lib/enums/product.enum";
import ProductService from "../../services/ProductService";

/**REDUX SLICE & SELECTOR */
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
});

export default function HomePage() {
  const { setPopularDishes } = actionDispatch(useDispatch());
  //Selector : Store => Data

  useEffect(() => {
    //Backend server data request => Data
    const product = new ProductService();
    product
      .getProducts({
        page: 1,
        limit: 4,
        order: "productViews",
        productCollection: ProductCollection.DISH,
      })
      .then((data) => {
        setPopularDishes(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div className={"homepage"}>
      <Statistics />
      <PopularDishes />
      <NewDishes />
      <Advertisment />
      <ActiveUsers />
      <Events />
    </div>
  );
}
