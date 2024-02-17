import React from 'react'

import "./Home.scss"
import HeroBanner from './heroBanner/HeroBanner'

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <div className="homePage">
        <HeroBanner/>
      </div>
    </div>
  )
}

export default Home