import axios from 'axios';
import React, { useEffect, useState } from 'react';
import apiDomain from '../../../config/api.config';
import styles from './Carousel.module.css';

const Carousel = () => {
    const [carousel, setCarousel] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data: services} = await axios.get(`${apiDomain}/services`);
                const carouselData = services.filter(service => service.price < 65)
                setCarousel(carouselData);
            } catch (error) {
                console.log(error);
            }     
        }
        fetchData();
    }, []);
    return (
        <div id="carouseIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                {carousel.map( (value, index) => (
                    <button key={value._id} type="button" data-bs-target="#carouseIndicators"  
                    data-bs-slide-to={index} className={!index ? 'active' : undefined} 
                    aria-current={!index ? 'true' : 'false'} aria-label={`Slide ${index}`}></button>
                ) )}
            </div>
            <div className="carousel-inner">
                {carousel.map( singleCarousel => {
                    return (
                        <div key={singleCarousel._id} className={`carousel-item position-relative  ${carousel.indexOf(singleCarousel) === 0 ? 'active' : ''}`}>
                            <img src={singleCarousel.picture} className={`d-block w-100 ${styles.carouselImage}`} alt={singleCarousel.service}/>
                            <div className={styles.blackShadow}></div>
                            <div className={`position-absolute ${styles.carouselText}`}>
                                <div>{singleCarousel.service} <h2 className='mt-3'>Price:{singleCarousel.price}</h2></div>
                            </div>
                        </div>
                    )
                })}
                
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouseIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouseIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Carousel;