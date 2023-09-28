import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import useAuth from "../hooks/useAuth"


const Private = ({ Item }) => {
    const { signed } = useAuth;

    return signed > 0 ? <Item /> : <Signin />;
};



const RoutesApp = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path="/home" element={<Private Item={Home} />} />
        <Route path="/" element={<Signin />} />
        <Route exact path="/signup" element={<Private Item={Signup} />} />
        <Route path="*" element={<Signin />} />
        </Routes>    
    </BrowserRouter>
  );
};

export default RoutesApp;
