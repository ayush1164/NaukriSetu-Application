import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect } from "react";

const ProtectedRoute = (prop) => {
  const { Component } = prop;

  let navigate = useNavigate();

  let token = Cookies.get("my-Token");

  useEffect(() => {
    if (token === undefined) {
      navigate("/login");
    }
  }, []);

  return <Component />;
};

export default ProtectedRoute;
