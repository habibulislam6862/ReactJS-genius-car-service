import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../Shared/Spinner/Spinner';

const SingleService = () => {
    const {id} = useParams();
    console.log(id);
    const [blog, setBlog] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getBlog = async () => {
            try {
                const {data} = await axios.get("/fakedata.json");
                const currentBlog = data.find( single => single.id === parseInt(id));
                setBlog(currentBlog);
                setLoading(false)
            } catch (error) {
                window.alert(error.message)
            }
        }
        getBlog();
    }, [id]);
    const {service: name, fullDescription, description, price, picture} = blog;
    return (
        <article className='mt-5'>
            {loading ? <Spinner/> : (
                <>
                <h2>{name}</h2>
                <img className='img-fluid' src={picture} alt={name} />
                <h4>{description}</h4>
                <p>{fullDescription}</p>
                <h2><span className='text-danger'>Only</span> ${price}</h2>
                <div className='d-grid my-4'>
                    <button className='btn btn-danger'>Place Order</button>
                </div>
                
                </>
            )}
            
        </article>
    );
};

export default SingleService;