import React from "react";

import "./Home.scss";
import HeroBanner from "./heroBanner/HeroBanner";

const Home = () => {
  return (
    <div>
      <div className="homePage">
        <HeroBanner />
      </div>
    </div>
  );
};

export default Home;
