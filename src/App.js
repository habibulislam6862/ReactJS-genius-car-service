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

export const RenderContext = createContext(undefined);
function App() {
  const [render, setRender] = useState({});
  return (
    <AuthProvider>
      <RenderContext.Provider value={{ render, setRender }}>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/*" element={<GuestPrivateRoute />}>
              <Route path="blog/:id" element={<SingleService />} />
              <Route path="blog/edit/:id" element={<EditService />} />
              <Route path="add-service" element={<AddService />} />
            </Route>
            <Route path="/services/*" element={<Services />} />
          </Routes>
        </div>
      </RenderContext.Provider>
    </AuthProvider>
  );
}

export default App;
