import { useState, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import AboutUs from "./pages/AboutUs/AboutUs";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import AddService from "./pages/Services/AddService/AddService";
import EditService from "./pages/Services/EditService/EditService";
import Services from "./pages/Services/Services";
import SingleService from "./pages/SingleService/SingleService";
import GuestPrivateRoute from "./private-routes/GuestPrivateRoute/GuestPrivateRoute";
import Header from "./pages/Shared/Header/Header";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import MyOrders from "./pages/MyOrders/MyOrders";
import NotFound from "./pages/NotFound";

export const RenderContext = createContext(undefined);
function App() {
  const [render, setRender] = useState({});
  return (
    <AuthProvider>
      <RenderContext.Provider value={{ render, setRender }}>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/*" element={<GuestPrivateRoute />}>
              <Route path="blog/:id" element={<SingleService />} />
              <Route path="blog/edit/:id" element={<EditService />} />
              <Route path="add-service" element={<AddService />} />
              <Route path="place-order" element={<PlaceOrder />} />
              <Route path="my-orders" element={<MyOrders />} />
            </Route>
            <Route path="/services/*" element={<Services />} />
          </Routes>
        </div>
      </RenderContext.Provider>
    </AuthProvider>
  );
}

export default App;
