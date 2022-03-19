import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import apiDomain from '../../config/api.config';
import { useNavigate } from 'react-router-dom';


const ManageService = ({serviceTitle = '',servicePrice = '', serviceImgLink = '', serviceDesc = '', serviceFullDesc = '', action = 'POST', button='Add', id =''}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmit = async formData => {
        const {title: service, price, imgLink:picture, desc:description, FullDesc:fullDescription} = formData;
        try {
            await axios( {
                    method: action,
                    url: action === 'POST' ? `${apiDomain}/service/${action}` : `${apiDomain}/service/${action}/${id}`,
                    data: {
                        service: service || serviceTitle, 
                        price: price || servicePrice, 
                        description: description || serviceDesc, 
                        picture: picture || serviceImgLink, 
                        fullDescription: fullDescription || serviceFullDesc
                    }
                }
            )
            navigate(-1)
        } catch (error) {
            window.alert(error.message);
        }
    };


    return (
        <div className='mt-4'>
           <h2>Add service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3 mt-4">
                    <label htmlFor="inputTitle" className="form-label">Service title</label>
                    <input defaultValue={serviceTitle} type="text" {...register("title",  { required: true })} className="form-control" id="inputTitle"/>
                    {errors.title && <span className='text-danger'>Title is empty</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input defaultValue={servicePrice} type="number" {...register("price",  { required: true })} className="form-control" id="price"/>
                    {errors.price && <span className='text-danger'>Price is empty</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image Link</label>
                    <input defaultValue={serviceImgLink} type="text" {...register("imgLink",  { required: true })} className="form-control" id="image"/>
                    {errors.imgLink && <span className='text-danger'>Image link is empty</span>}
                </div>
                <div className="form-floating mb-3">
                    <textarea className="form-control" {...register("desc",  { required: true })} placeholder="Short description" id="description" defaultValue={serviceDesc} style={{height: '100px'}}></textarea>
                    <label htmlFor="description">Description</label>
                    {errors.desc && <span className='text-danger'>Description box is empty</span>}
                </div>
                <div className="form-floating mb-3">
                    <textarea className="form-control" {...register("FullDesc",  { required: true })} placeholder="Short description" id="fullDescription" style={{height: '300px'}} defaultValue={serviceFullDesc}></textarea>
                    <label htmlFor="fullDescription">Full Description</label>
                    {errors.FullDesc && <span className='text-danger'>Full Description box is empty</span>}
                </div>
                
                <button type="submit" className="btn btn-dark">{button}</button>
            </form>
        </div>
    );
};

export default ManageService;