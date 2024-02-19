import React from "react";

import "./Home.scss";
import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/Trending";
import Popular from "./popular/Popular";

const Home = () => {
  return (
    <div>
      <div className="homePage">
        <HeroBanner />
        <Trending />
        <Popular />
      </div>
    </div>
  );
};

export default Home;
