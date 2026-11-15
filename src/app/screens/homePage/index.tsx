import { Container } from "@mui/system";
import React, { useEffect } from "react";
import Advertisment from "./Advertisment";
import Events from "./Events";
import NewDishes from "./NewDishes";
import PopularDishes from "./PopularDishes";
import ActiveUsers from "./ActiveUsers";
import Statistics from "./Statistics";
import "../../../css/home.css";

export default function HomePage() {
  //Selector : Store => Data

  useEffect(() => {
    //Backend server data request => Data
    //Slice: Data => Store
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
