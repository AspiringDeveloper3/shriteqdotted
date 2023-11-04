import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-light ">
          <div className="container">
              <a className="navbar-brand" href="/">
                <img className="brand" src='https://s3-alpha-sig.figma.com/img/15a7/e506/20c4072ec4d70e9d5e5bff36050c6d96?Expires=1699833600&Signature=ApzclxEf5ULtAzfUlg9Tju-WHGjzWvYFl4M57dqaM-jEIp~TX2eGnQwnBB~cqOVUAzTt3GEGM92mHIwk2zVt18APX6~4K5XnAv3g0sltDng-sMmK7dTYHMnifRHQppbjAUwGk~~2ag~6RpVlX-8nSGDooFZFVWJfhTN2QUq6yCqY~cMHZJP7IgF-SImKF-EcYKQTVJekreX3AZCp5GMvsW-1DP6s-ixH3EsTNLlq3pIJe8pRSxKNd0qjUkYshpOtZnc-gRDkzagnQ5XePOP6yMOsTuLER6l-6m4axS6H2EEkCUQTqfxWaOiPb5AGHI3NWMleHNag0W9l1upcHrWF8Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4  ' alt="dotted-brand" />
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                          <a className="nav-link" href="/">Home</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#filler-timeline">Timeline</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="/">Store</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#filler">About Us</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="/">Contact Us</a>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
  );
};

export default Navbar;
