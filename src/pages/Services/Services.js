import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Spinner from '../Shared/Spinner/Spinner';
import Card from './Card/Card';

const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchService = async() => {
            try {
                const {data} =  await axios.get("/fakedata.json");
                setLoading(false)
                setServices(data);
            } catch (error) {
                window.alert(error.message)
            }
        }
        fetchService();
    }, []);
     return loading ? <Spinner/> : (
        <div>
            {services.map(service => <Card key={service.id} service={service}/>)}
        </div>
    );
      
};

export default Services;