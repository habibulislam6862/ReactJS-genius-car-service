import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import apiDomain from "../../../config/api.config";
import Card from "../Card/Card";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${apiDomain}/services`);
        const topSeven = data.services.slice(0, 7);
        setServices(topSeven);
      } catch (error) {
        window.alert(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <h1>Our services</h1>
      <div className="row gy-5 mb-5">
        {services.map((service) => (
          <Card key={service._id} service={service} />
        ))}
        <div className="col-md-3">
          <div className="p-3 d-flex flex-column rounded  bg-dark h-100">
            <div className="m-auto">
              <div className="d-flex align-items-center flex-column">
                <h3 className="text-light text-center">
                  Searching for another service?
                </h3>
                <NavLink to="/services" className="btn btn-light mt-3">
                  See More
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
