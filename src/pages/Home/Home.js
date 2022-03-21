import React, { useEffect } from 'react';
import Carousel from './Carousel/Carousel';
import Services from './Services/Services';

const Home = () => {
    useEffect(() => {
        document.title = 'Genius Car Service';
    }, []);
    return (
        <div>
            <Carousel/>
            <Services/>
        </div>
    );
};

export default Home;