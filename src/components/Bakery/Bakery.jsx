import React from 'react'
import BakeryHome from './BakeryHome';
import BakeryItems from './BakeryItems';
import BakeryNavbar from './BakeryNavbar';
import './navbar.css'

import cakeSingle from '../../Assets/single.png'
import cake1 from '../../Assets/cake1.png'
import cake2 from '../../Assets/cake2.png'
import cake3 from '../../Assets/cake3.png'
import cake4 from '../../Assets/cake4.png'
import cake5 from '../../Assets/cake5.png'
import cake6 from '../../Assets/cake6.png'
import cake7 from '../../Assets/cake7.png'
import cake8 from '../../Assets/cake8.png'
import cake9 from '../../Assets/cake9.png'
import cake10 from '../../Assets/cake10.png'
import cake11 from '../../Assets/cake11.png'
import BakeryEnquire from './BakeryEnquire';




const cakes = [
    { name: 'Pack of 12 fresh Cupcakes', sub: 'Small, fluffy, sweet cake with frosting and sprinkles.', price: '£30.00', img: cakeSingle },
    { name: 'Chocolate drip cake with frosting', sub: 'Moist chocolate cake with chocolate drip and decorations.', price: '£30.00', img: cake1 }, 
    { name: 'White cake with blueberries on top', sub: 'Light white cake with fresh blueberries on top and flower decorations.', price: '£30.00', img: cake2 },
    { name: 'Layered Rainbow cake', sub: 'Colorful layered cake with stars and sprinkles on outside.', price: '£30.00', img: cake3 }, 
    { name: 'Fresh fruit Cheesecake', sub: 'Smooth cheesecake with a selection of fresh fruit on top.', price: '£30.00', img: cake4 }, 
    { name: 'Cheesecake with caramel', sub: 'Rich, indulgent cheesecake with caramel and chocolate on top.', price: '£30.00', img: cake5 }, 
    { name: 'Towered Cherry Cake', sub: 'Pink cake with cherry flavor and fresh cherries on the outside.', price: '£30.00', img: cake6 }, 
    { name: 'Princess Layered Castle Cake', sub: 'Elegant layered pink and white castle that is fit for a princess.', price: '£30.00', img: cake7 }, 
    { name: 'Cookie and cream Cake', sub: 'Pink cookie and cream flavored layered cake with cookies on the outside.', price: '£30.00', img: cake8 }, 
    { name: 'Traditional wedding cake', sub: 'Elegant multi-tiered white cake for traditional weddings.', price: '£30.00', img: cake9 }, 
    { name: 'Multi-coloured flower wedding Cake', sub: 'Elegant multi-tiered coloured cake with flowers for traditional weddings.', price: '£30.00', img: cake10 }, 
    { name: 'Layered Strawberry cake', sub: 'Layered cake with strawberry flavor and fresh strawberries.', price: '£30.00', img: cake11 }, 





]
const Bakery = () => {

    return (<div className='bakery bakery-font'>
        <BakeryNavbar />
        <BakeryHome />
        <BakeryItems cakes={cakes} />
        <BakeryEnquire cakes={cakes} />
    </div>)
}

export default Bakery;