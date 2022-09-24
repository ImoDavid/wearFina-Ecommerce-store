import React from 'react';
import Announcement from '../components/announcement';
import Categories from '../components/categories';
import NavBar from '../components/navbar';
import Newsletter from '../components/newsletter';
import Products from '../components/products';
import Slider from '../components/slider';


const Home = () => {
    return (
        <div>
            <Announcement/>
            <NavBar/>
            <Slider/>
            <Categories/>
            <Products/>
            <Newsletter/>
        </div>
      );
}
 
export default Home;