import React from 'react'
import './navbar.css'
import pattern from '../../Assets/bgPattern.png'
import cakeSingle from '../../Assets/single.png'
const BakeryItems = ({ cakes }) => {

    return (
        <div className="sectionItem-bg bakery-font" style={{ backgroundImage: `url(${pattern})` }}>
            <div className="cake-grid">
                <h1 className="cake-heading">Cakes</h1>
                <div className="cake-grid-container">
                    {cakes.map((cake, index) => (
                        // <div className="cake-item" key={index}>
                        //     <div className="item-bg" style={{ backgroundImage: `url(${cake.img})` }}>
                        //         <div className="item-info">
                        //             <h3 className="item-name">{cake.name}</h3>
                        //             <p className="item-price">{cake.price}</p>
                        //         </div>
                        //     </div>
                        // </div>
                        <div className="card product bakery-font">
                            <img className = 'card-img' src={cake.img}/>
                            <h1 className='bakery-font'>{cake.name}</h1>
                            <p className="price bakery-font">{cake.price}</p>
                            <p className='bakery-font'>{cake.sub}</p>
                            <p className='card-button'><button className='bakery-font'>Add to Cart</button></p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BakeryItems;