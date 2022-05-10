import React from 'react';
import Banner from './Banner';
import Info from './info';
import Services from './Services';

const Home = () => {
    return (
        <div className='lg:px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
        </div>
    );
};

export default Home;