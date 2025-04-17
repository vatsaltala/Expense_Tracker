import React from "react";
import { Link } from "react-router-dom";
import "./signup.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Signup = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const submitHandler = async (data) => {
    try {
      const roleId = data.role === "user" ? "67e00fb1354d44319b5e481a" : "67e026d59f4ea269f362c045";
      const res = await axios.post("http://localhost:3000/user/signup", {
        ...data,
        roleId: roleId
      });

      if (res.status === 201) {
        alert("Signup successful!");
        navigate("/login");
      } else {
        alert("Signup failed. Please try again.");
      }
    } catch (error) {
      alert(error.response?.data?.message || "An error occurred during signup.");
      console.error("Signup error:", error);
    }
  };

  return (
    <section className="gradient-custom-3 signup-container">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-lg-9 col-xl-7">
            <div className="card signup-card">
              <div className="row g-0">
                {/* Image Column */}
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img 
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                    className="img-fluid signup-image" 
                    alt="Signup illustration"
                  />
                </div>

                {/* Form Column */}
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-md-5">
                    <h2 className="text-center mb-4">Create Account</h2>

                    <form onSubmit={handleSubmit(submitHandler)}>
                      {/* First Name */}
                      <div className="form-outline mb-4">
                        <div className="d-flex align-items-center">
                          <i className="fas fa-user form-icon me-3"></i>
                          <div className="flex-fill">
                            <input
                              type="text"
                              id="firstName"
                              className={`form-control ${errors.firstname && "is-invalid"}`}
                              {...register("firstname", { 
                                required: "First name is required",
                                minLength: {
                                  value: 2,
                                  message: "Minimum 2 characters required"
                                }
                              })}
                            />
                            <label className="form-label" htmlFor="firstName">First Name</label>
                            {errors.firstname && (
                              <div className="invalid-feedback">{errors.firstname.message}</div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Last Name */}
                      <div className="form-outline mb-4">
                        <div className="d-flex align-items-center">
                          <i className="fas fa-user form-icon me-3"></i>
                          <div className="flex-fill">
                            <input
                              type="text"
                              id="lastName"
                              className={`form-control ${errors.lastname && "is-invalid"}`}
                              {...register("lastname", { 
                                required: "Last name is required",
                                minLength: {
                                  value: 2,
                                  message: "Minimum 2 characters required"
                                }
                              })}
                            />
                            <label className="form-label" htmlFor="lastName">Last Name</label>
                            {errors.lastname && (
                              <div className="invalid-feedback">{errors.lastname.message}</div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Email */}
                      <div className="form-outline mb-4">
                        <div className="d-flex align-items-center">
                          <i className="fas fa-envelope form-icon me-3"></i>
                          <div className="flex-fill">
                            <input
                              type="email"
                              id="email"
                              className={`form-control ${errors.email && "is-invalid"}`}
                              {...register("email", { 
                                required: "Email is required",
                                pattern: {
                                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                  message: "Invalid email address"
                                }
                              })}
                            />
                            <label className="form-label" htmlFor="email">Email</label>
                            {errors.email && (
                              <div className="invalid-feedback">{errors.email.message}</div>
                            )}
                          </div>
                        </div>
                      </div>

                      
                      <div className="form-outline mb-4">
                        <div className="d-flex align-items-center">
                          <i className="fas fa-lock form-icon me-3"></i>
                          <div className="flex-fill">
                            <input
                              type="password"
                              id="password"
                              className={`form-control ${errors.password && "is-invalid"}`}
                              {...register("password", { 
                                required: "Password is required",
                                minLength: {
                                  value: 6,
                                  message: "Minimum 6 characters required"
                                }
                              })}
                            />
                            <label className="form-label" htmlFor="password">Password</label>
                            {errors.password && (
                              <div className="invalid-feedback">{errors.password.message}</div>
                            )}
                          </div>
                        </div>
                      </div>

                      
                      <div className="d-flex justify-content-center mb-3">
                        <button 
                          type="submit" 
                          className="btn btn-signup btn-lg w-100"
                        >
                          Register
                        </button>
                      </div>

                      <p className="text-center mb-0">
                        Already have an account?{" "}
                        <Link to="/login" className="login-link">Login here</Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};