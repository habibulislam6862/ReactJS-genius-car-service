import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Card.module.css';

const Card = ({service}) => {
    const {service: name, description, fullDescription, price, picture, _id: id} = service;
    const trimedDescription = fullDescription.split(' ').slice(0,25).join(' ');
    return (
        <div className='d-flex flex-column flex-md-row mt-5' style={{columnGap: '30px'}}>
            <div><img className={`rounded ${styles.featureImage}`}  src={picture} alt={name} /></div>
            <div>
                <NavLink to={`/blog/${id}`}><h2 className='mt-4 mt-md-0'>{name}</h2></NavLink>
                <h4 className='text-danger'>Only ${price}</h4>
                <h5 className='d-sm-none d-md-block'>{description}</h5>
                <p>{trimedDescription}...</p>
            </div>
        </div>
    );
};

export default Card;