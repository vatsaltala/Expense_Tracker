import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios

export const UserNavbar = () => {
  const navigate = useNavigate();
  const [userdata, setUserdata] = useState({ firstname: "", lastname: "" });

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userid = localStorage.getItem("id");
        if (userid) {
          const userres = await axios.get(`http://localhost:3000/user/getuser/${userid}`);
          console.log(userres.data);
          setUserdata({
            firstname: userres.data.data.firstname,
            lastname: userres.data.data.lastname,
          });
        }
      } catch (err) {
        console.error("Error fetching user details:", err);
      }
    };

    fetchUserDetails(); // Call the function
  }, []); // Empty dependency array to run only once on mount

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <nav className="app-header navbar navbar-expand bg-body">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link"
                data-lte-toggle="sidebar"
                to="#"
                role="button"
              >
                <i className="bi bi-list" />
              </Link>
            </li>
            <li className="nav-item d-none d-md-block">
              <Link to="#" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item d-none d-md-block">
              <Link to="#" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown user-menu">
              <Link
                to="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                {/* <img
                  src="../../dist/assets/img/user2-160x160.jpg"
                  className="user-image rounded-circle shadow"
                  alt="User Image"
                /> */}
                <span className="d-none d-md-inline">
                  {userdata.firstname} {userdata.lastname}
                </span>
              </Link>
              <ul className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                <li className="user-header text-bg-primary">
                  <img
                    src="../../dist/assets/img/user2-160x160.jpg"
                    className="rounded-circle shadow"
                    alt="User Image"
                  />
                </li>
                <li className="user-footer">
                  <button
                    className="btn btn-default btn-flat w-100"
                    onClick={handleLogout}
                  >
                    <i className="bi bi-box-arrow-right me-2"></i>
                    Sign out
                  </button>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn btn-danger btn-link"
                onClick={handleLogout}
              >
                <i className="bi bi-box-arrow-right"></i>
                <span className="d-none d-md-inline ms-1 ">Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};