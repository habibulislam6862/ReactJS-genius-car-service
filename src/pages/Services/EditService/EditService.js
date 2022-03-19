import React, { useEffect, useState } from 'react';
import ManageService from '../../Shared/ManageService';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import apiDomain from '../../../config/api.config';

const EditService = () => {
    const {id} = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        const getService = async () => {
            const {data} = await axios.get(`${apiDomain}/service/${id}`);
            setService(data)
        }
        getService();
    }, [id]);
    console.log(service);
    const {_id, service: name, price, picture, description, fullDescription} = service;
    return (
        <>
           <ManageService 
            serviceTitle={name}
            servicePrice={price}
            serviceImgLink={picture}
            serviceDesc={description}
            serviceFullDesc={fullDescription}
            action="PUT"
            id={_id}
            button="Edit"
           /> 
        </>
    );
};

export default EditService;