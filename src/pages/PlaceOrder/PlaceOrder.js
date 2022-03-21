import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import apiDomain from "../../config/api.config";
import { useLocation, useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const { user } = useAuth();
  const { register, handleSubmit } = useForm();
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    document.title = 'Place order - Genius Car service';
  }, []);
  const onSubmit = async (data) => {
    const { name, email } = data;
    const { data: response } = await axios.post(`${apiDomain}/place-order`, {
      name,
      email,
      service: location.state.id,
    });
    if (response.insertedId) {
      alert("Item orders successfully");
      navigate("/");
    } else {
      alert("Order failed. Please try again later");
    }
  };
  return (
    <div>
      <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <input
            className="form-control"
            value={user.displayName}
            {...register("name")}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            value={user.email}
            {...register("email")}
          />
        </div>
        <input className="btn btn-danger" type="submit" />
      </form>
    </div>
  );
};

export default PlaceOrder;
