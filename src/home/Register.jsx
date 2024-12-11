import React from "react";

const subTitle = "Save The Day";

const title = (
  <h2 className="title">
    Join our Day-Long Free Workshop for{" "}
    <b>
      Advanced <span>Mastering</span>
    </b>{" "}
    in Sales
  </h2>
);

const desk = "Limited Time Offer – Hurry Up!";

const Register = () => {
  return (
    <section className="register-section padding-tb pb-0">
      <div className="container">
        <div className="row g-4 row-cols-lg-2 row-cols-1 align-items-center">
          {/* Workshop Details Section */}
          <div className="col">
            <div className="section-header">
              <span className="subtitle">{subTitle}</span>
              {title}
              <p className="description">{desk}</p>
            </div>
          </div>

          {/* Registration Form Section */}
          <div className="col">
            <div className="section-wrapper">
              <h4 className="form-title">Register Now</h4>
              <form className="register-form">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="reg-input"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="reg-input"
                />
                <input
                  type="tel"
                  name="number"
                  placeholder="Enter Your Contact Number"
                  className="reg-input"
                />
                <button type="submit" className="lab-btn">
                  Register Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
