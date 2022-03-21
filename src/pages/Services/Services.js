import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Spinner from '../Shared/Spinner/Spinner';
import Card from './Card/Card';
import { useNavigate } from 'react-router-dom';
import apiDomain from '../../config/api.config';

const Services = () => {
    const [services, setServices] = useState([]);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true)
    const [limit] = useState(5)
    const [page, setPage] = useState(0);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchService = async() => {
            try {
                const {data} =  await axios.get(`${apiDomain}/services?page=${page}&limit=${limit}`);
                setLoading(false)
                setTotal(data.count);
                setServices(data.services.reverse());
            } catch (error) {
                window.alert(error.message)
            }
        }
        fetchService();
    }, [page, limit]);

    const handleAddNew = () => {
        navigate('/add-service')
    }

    const paginationHandler = (element) => {
        window.scrollTo(0,0);
        setLoading(true);
        setPage(element);
    }

     return loading ? <Spinner/> : (
        <div>
            <button onClick={handleAddNew} className="btn btn-outline-dark mt-4">Add service</button>
            {services.map(service => <Card key={service._id} service={service}/>)}
            {[...Array(Math.ceil(total / limit)).keys()].map(el => <button onClick={() => paginationHandler(el)} key={el} className={`btn btn-outline-dark ms-2 mb-5 ${el === page ? 'btn-dark text-light' : ''}`}>{el+1}</button>)}
        </div>
    );
};

export default Services;