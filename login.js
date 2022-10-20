import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
export default function Login(props) {
  const navigate = useNavigate();
  const [login_credentials, setLogin_credentials] = useState({
    username: "",
    password: "",
  });
  const validateLogin = () => {
    fetch("http://localhost:8080/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login_credentials),
    }).then((res) => {
      props.checkStatus(res.status)
       
    });
  };  
  return (
    <>
      <div className="signin">
        <div className="back-img">
          <div className="sign-in-text">
            <h2 className="active">Log in</h2>
          </div>
          <div className="layer"></div>
          <p className="point">&#9650;</p>
        </div>
        <div className="form-section">
          <form action="#">
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input
                placeholder="Enter email"
                className="mdl-textfield__input"
                type="email"
                id="sample3"
                style={{
                  width: "100%",
                  border: "0px",
                  borderBottom: "1px solid #d5d5d5",
                  background: "#f5f5f5",
                }}
                value={login_credentials.username}
                onChange={(e) => {
                  setLogin_credentials({
                    ...login_credentials,
                    username: e.target.value,
                  });
                }}
              />
            </div>
            <br />
            <br />

            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input
                placeholder="Enter password"
                pattern=".{8,}"
                className="mdl-textfield__input"
                type="password"
                id="sample3"
                style={{
                  width: "100%",
                  border: "0px",
                  borderBottom: "1px solid #d5d5d5",
                  background: "#f5f5f5",
                }}
                value={login_credentials.password}
                onChange={(e) => {
                  setLogin_credentials({
                    ...login_credentials,
                    password: e.target.value,
                  });
                }}
              />
            </div>
            <br />
          </form>
        </div>

        <button
          className="sign-in-btn mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--raised mdl-button--colored"
          style={{ color: "white" }}
          onClick={validateLogin}
        >
          Log in
        </button>
      </div>
    </>
  );
}
