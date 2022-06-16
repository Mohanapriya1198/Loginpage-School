import React from "react";
import "./Login.css";
import school from "../../image/school.png";
import lock from "../../image/lock.png";

const Login = () => {
  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="form-section">
              <h3>Sign Into Your Account</h3>
              <div className="login-inner-form">
                <form action="#" method="Post">
                  <div className="form-group clearfix">
                    <div className="form-box">
                      <img src={school} />
                      <input
                        name="school"
                        type="school"
                        className="form-control"
                        id="first_field"
                        placeholder="School Name"
                        aria-label="School Name"
                      />
                    </div>
                  </div>
                  <div className="form-group clearfix">
                    <div className="form-box">
                      <img src={lock} />
                      <input
                        name="password"
                        type="password"
                        className="form-control"
                        autoComplete="off"
                        id="second_field"
                        placeholder="Password"
                        aria-label="Password"
                      />
                    </div>
                  </div>
                  <div className="form-group clearfix">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg btn-theme"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
              <p>Don't have an account?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
