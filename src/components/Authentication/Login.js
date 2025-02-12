import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../middleware/AuthContext";
import loginImg from '../../assets/images/Login.jpg';
import { ToastContainer,toast } from "react-toastify";

// Validation Schema using Yup
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: validationSchema,
    onSubmit: async (values) => {
      // Handle form submission
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_BASE_URL}php/login.php`,
          {
            email: values.email,
            password: values.password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );


        if (response.data.success) {
          login(response.data.token);
          toast.success("Login successful");
          setTimeout(() => {
            navigate("/managejobs", { replace: true });
          }, 1500); 
        } else {
          toast.error("Invalid Credential");
        }
      } catch (error) {
        console.error("Login Error: ", error);
        alert("An error occurred during login.");
      }
    },
  });

  return (
    <div
      className="container mt-0 mb-5"
      style={{
        minHeight: "100vh",
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
      }}
    >
      <div
        className="mt-3 mb-3 d-flex mx-auto justify-content-center"
        style={{
          backdropFilter: "blur(5px)",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          borderRadius: "10px",
          padding: "30px",
          width: "100%",
          maxWidth: "500px",
        }}
      >
        <div>
        <ToastContainer/>
          <img src={loginImg} alt="not found"/>
          <h2 className="modal-title text-center">Login</h2>
          <p className="text-center">Login and get access to all the features of Post Job</p>
       
          <form onSubmit={formik.handleSubmit}>
     
            <div className="form-group mb-3">
              <input
                type="email"
                placeholder="Email*"
                {...formik.getFieldProps("email")}
                className="form-control"
                style={{
                  padding: "10px",
                  borderRadius: "5px",
                  borderColor: formik.touched.email && formik.errors.email ? "red" : "#ccc",
                }}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-danger">{formik.errors.email}</div>
              ) : null}
            </div>

            <div className="form-group mb-3">
              <input
                type="password"
                placeholder="Password*"
                {...formik.getFieldProps("password")}
                className="form-control"
                style={{
                  padding: "10px",
                  borderRadius: "5px",
                  borderColor: formik.touched.password && formik.errors.password ? "red" : "#ccc",
                }}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-danger">{formik.errors.password}</div>
              ) : null}
            </div>

            <div className="col-md-12">
              <button
                type="submit"
                className="site-button"
                style={{
                  backgroundColor: "#007bff",
                  color: "white",
                  width: "100%",
                  padding: "10px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
