import React, { useEffect } from 'react';
import ManageService from '../../Shared/ManageService';

const AddService = () => {
    useEffect(() => {
        document.titlte= 'Add New Service - Genius Car Service';
    }, []);

    return (
        <>
            {/* add service form */}
            <ManageService/>
        </>
    );
};

export default AddService;