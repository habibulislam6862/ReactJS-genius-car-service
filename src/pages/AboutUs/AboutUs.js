import React, { useEffect } from 'react';

const AboutUs = () => {
    useEffect(() => {
        document.title = "About Us - Genius Car Service"
    }, [])
    return (
        <div>
            This is about us page
        </div>
    );
};

export default AboutUs;