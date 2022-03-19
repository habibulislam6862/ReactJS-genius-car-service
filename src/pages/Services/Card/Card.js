import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = ({service}) => {
    const {service: name, description, fullDescription, price, picture, _id: id} = service;
    const trimedDescription = fullDescription.split(' ').slice(0,50).join(' ');
    return (
        <div className='d-flex mt-5' style={{columnGap: '30px'}}>
            <div><img className='rounded' style={{width: '300px'}} src={picture} alt={name} /></div>
            <div>
                <NavLink to={`/blog/${id}`}><h4>{name}</h4></NavLink>
                <h4 className='text-danger'>Only ${price}</h4>
                <h5>{description}</h5>
                <p>{trimedDescription}...</p>
            </div>
        </div>
    );
};

export default Card;