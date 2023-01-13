import React from 'react'
import './navbar.css'
import heroBG from '../../Assets/cakeHeroBG.png'
const BakeryHome = () => {

    return (
        <div className="hero bakery-font" style={{ backgroundImage: `url(${heroBG})` }}>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-heading">Say 'I Do' to Double Dough's Delicious Wedding Cakes</h1>
          <p className="hero-subheading">Indulge in our handmade, custom-designed wedding cakes - the sweetest start to your happily ever after.</p>
          <button className="hero-button">Enquire Today</button>
        </div>
      </div>
    </div>
    );
}

export default BakeryHome;