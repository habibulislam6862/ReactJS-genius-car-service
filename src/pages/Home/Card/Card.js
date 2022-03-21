import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Card.module.css';

const Card = ({ service }) => {
    const { picture, service: name, price, description, _id } = service;
    return (
        <div className='col-md-3'>
            <div className='p-3 d-flex flex-column rounded  bg-dark h-100'>
                <div className='text-center'>
                    <div>
                        <img className={`rounded img-fluid ${styles.image}`} src={picture} alt={name} />
                    </div>
                    <h3 className='text-light'>{name}</h3>
                </div>
                <div className='mt-auto'>
                    <h3><span className='text-danger'>Only </span><span className='text-light'>${price}</span></h3>
                    <div className='text-light'>{description}</div>
                    <div className="d-grid mt-3">
                        <NavLink to={`/blog/${_id}`} className='btn btn-block btn-light'>Read more</NavLink>
                    </div>
                    
                </div>

            </div>
        </div>
    );
};

export default Card;