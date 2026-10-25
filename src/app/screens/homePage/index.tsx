import { Container } from "@mui/system";
import React from "react";

import Advertisment from "./Advertisment";
import Events from "./Events";
import NewDishes from "./NewDishes";
import PopularDishes from "./PopularDishes";
import ActiveUsers from "./ActiveUsers";
import Statistics from "./Statistics";

export default function HomePage() {
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
