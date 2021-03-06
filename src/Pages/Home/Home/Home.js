import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Services></Services>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;