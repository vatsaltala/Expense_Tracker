import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios for making HTTP requests

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const submitHandler = async (data) => {
    console.log("formData...", data);
  
    try {
      const res = await axios.post("http://localhost:3000/user/loginwithtoken", data);
      console.log(res)
      console.log(res.data); // Log the full response to see its structure

      if (res.status === 200) {
        const user = res.data.data;
        const token = res.data.token;
      
        localStorage.setItem("id", user._id);
        localStorage.setItem("role", user.role);
        localStorage.setItem("token", token); // Save the token
      
        if (user.role === "user") {
          navigate("/user/profile");
        } else if (user.role === "admin") {
          navigate("/admin");
        }
      
        alert("Login success");
      }
    } catch (err) {
      console.error(err);
      if (err.response) {
        // Handle specific error messages from backend
        alert(err.response.data.message || "Login failed. Please check your credentials.");
      } else {
        alert("somthing wrong.");
      }
    }
  };

  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "#9A616D" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form"
                      className="img-fluid"
                      style={{ borderRadius: "1rem 0 0 1rem" }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form onSubmit={handleSubmit(submitHandler)}>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i className="fas fa-cubes fa-2x me-3" style={{ color: "#ff6219" }}></i>
                          <span className="h1 fw-bold mb-0">Login</span>
                        </div>

                        <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>
                          Sign into your account
                        </h5>

                        <div data-mdb-input-init className="form-outline mb-4">
                          <input
                            type="email"
                            id="form2Example17"
                            className="form-control form-control-lg"
                            {...register("email", { required: true })}
                          />
                          <label className="form-label" htmlFor="form2Example17">
                            Email address
                          </label>
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example27"
                            className="form-control form-control-lg"
                            {...register("password", { required: true })}
                          />
                          <label className="form-label" htmlFor="form2Example27">
                            Password
                          </label>
                        </div>

                        <div className="pt-1 mb-4">
                          <button
                            data-mdb-button-init
                            data-mdb-ripple-init
                            className="btn btn-dark btn-lg btn-block"
                            type="submit" 
                          >
                            Login
                          </button>
                        </div>

                        <a className="small text-muted" href="/resetpassword">
                          Forgot password?
                        </a>
                        <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                          Don't have an account?{" "}
                          <Link to="/signup" style={{ color: "#393f81" }}>
                            sign up
                          </Link>
                        </p>
                        <a href="#!" className="small text-muted">
                          Terms of use.
                        </a>
                        <a href="#!" className="small text-muted">
                          Privacy policy
                        </a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;