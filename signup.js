import React from "react";
import "./login.css"
export default function Signup() {
  return (
    <>
      <div className="signin">
        <div className="back-img">
          <div className="sign-in-text">
            <h2 className="active">Signup</h2>
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
              />
            </div>
            <br />
          </form>
        </div>

        <button
          className="sign-in-btn mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--raised mdl-button--colored"
          style={{ color: "white" }}
        >
          Signup
        </button>
      </div>
    </>
  );
}
