import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import apiDomain from '../../config/api.config';
import Spinner from '../Shared/Spinner/Spinner';
import useAuth from './../../hooks/useAuth';

const SingleService = () => {
    const {id} = useParams();
    const [blog, setBlog] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const {user} = useAuth();

    useEffect(() => {
        const getBlog = async () => {
            try {
                const {data: currentBlog} = await axios.get(`${apiDomain}/service/${id}`);
                setBlog(currentBlog);
                console.log(currentBlog);
                setLoading(false)
            } catch (error) {
                window.alert(error.message)
            }
        }
        getBlog();
    }, [id]);
    const location = useLocation();
    const handleDelete = async() => {
        try {
            const confirm = window.confirm("Are you really want to  delete the post?");
            if(confirm) {
                if(user.email){
                    const {data} = await axios.delete(`${apiDomain}/service/delete/${id}`)
                    if(data.deletedCount === 1) {
                        navigate(-1)
                    } else {
                        window.alert("Failed")
                    }
                } else {
                    navigate("/login", {
                        state: {
                            from: location
                        }
                    })
                }
            }
        } catch (error) {
            window.alert(error.message)
        }
    }
    const {service: name, fullDescription, description, price, picture} = blog;
    return (
        <article className='mt-5'>
            <button className='btn btn-dark' onClick={() => navigate(-1)}>Back</button>
            <button className='btn btn-outline-dark ms-3' onClick={() => navigate(`/blog/edit/${id}`)}>Edit</button>
            <button className='btn btn-outline-danger ms-3' onClick={handleDelete}>Delete</button>
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