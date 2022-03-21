import React, { useEffect, useState } from "react";
import axios from "axios";
import apiDomain from "../../config/api.config";
import useAuth from "../../hooks/useAuth";

const MyOrders = () => {
  const [userOrder, setUserOrder] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    axios
      .get(`${apiDomain}/user-orders?email=${user.email}`)
      .then(({ data }) => setUserOrder(data))
      .catch((error) => console.log(error.message));
  }, [user]);

  return (
    <div>
      <h3>My Orders</h3>

      <ol className="list-group list-group-numbered">
        {userOrder.map((order) => (
          <li
            key={order._id}
            className="list-group-item d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">{order.service}</div>${order.price}
            </div>
            <span className="badge bg-danger rounded-pill">Pending</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default MyOrders;
