import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Spinner from '../Shared/Spinner/Spinner';
import Card from './Card/Card';
import { useNavigate } from 'react-router-dom';
import apiDomain from '../../config/api.config';

const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();
    useEffect(() => {
        const fetchService = async() => {
            try {
                const {data} =  await axios.get(`${apiDomain}/services`);
                setLoading(false)
                setServices(data.reverse());
            } catch (error) {
                window.alert(error.message)
            }
        }
        fetchService();
    }, []);

    const handleAddNew = () => {
        navigate('/add-service')
    }
     return loading ? <Spinner/> : (
        <div>
            <button onClick={handleAddNew} className="btn btn-outline-dark mt-4">Add service</button>
            {services.map(service => <Card key={service._id} service={service}/>)}
        </div>
    );
      
};

export default Services;