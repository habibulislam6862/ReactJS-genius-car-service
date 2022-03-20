import React, { useContext, useRef } from "react";
import styles from "./Form.module.css";
import useAuth from "./../../../hooks/useAuth";
import { RenderContext } from "../../../App";
import { useNavigate } from "react-router-dom";
const Form = ({ redirect }) => {
  const userName = useRef();
  const userEmail = useRef();
  const phoneNumberRef = useRef();
  const OTPRef = useRef();
  const { setRender } = useContext(RenderContext);
  const navigate = useNavigate();

  const { phoneNumberSignIn, verifyOPTPhone } = useAuth();
  const handleSignIn = (e) => {
    e.preventDefault();
    const number = phoneNumberRef.current.value;
    phoneNumberSignIn("phone-number-verify", number);
  };
  const submitOTP = async (e) => {
    e.preventDefault();
    await verifyOPTPhone(
      OTPRef.current.value,
      userName.current.value,
      userEmail.current.value
    );
    setRender({ user: true });
    navigate(redirect);
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <form className={styles.form}>
          <input
            ref={userName}
            className="form-control mb-4 mt-4 form-control-lg"
            type="text"
            placeholder="Enter your Full Name"
          />
          <input
            ref={userEmail}
            className="form-control  mb-4 form-control-lg"
            type="text"
            placeholder="Enter your Email address"
          />
          <input
            ref={phoneNumberRef}
            className="form-control mb-4 form-control-lg"
            type="text"
            placeholder="Enter your phone number"
          />
          <div className="d-grid">
            <button
              id="phone-number-verify"
              onClick={handleSignIn}
              data-bs-toggle="modal"
              data-bs-target="#otp-popup"
              type="submit"
              className={` btn-lg btn-dark`}
            >
              Send OTP
            </button>
          </div>
        </form>
      </div>
      <div
        className="modal fade"
        id="otp-popup"
        tabIndex="-1"
        aria-labelledby="otpPopupLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="otpPopupLabel">
                Enter your OPT
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <form onSubmit={submitOTP}>
              <div className="modal-body">
                <input
                  ref={OTPRef}
                  className="form-control"
                  type="text"
                  placeholder="Enter OTP"
                />
              </div>
              <div className="modal-footer">
                <button
                  type="submit"
                  data-bs-dismiss="modal"
                  className="btn btn-primary"
                >
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
