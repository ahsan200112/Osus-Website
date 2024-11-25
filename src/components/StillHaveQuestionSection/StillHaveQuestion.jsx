import React from "react";
import "./StillHaveQuestion.css"; // Optional custom CSS
import Section3Image from "../../assets/images/Section3Image.png"; // Replace with your image path\
import Avatar1 from "../../assets/images/Avatar1.png";
import Avatar2 from "../../assets/images/Avatar2.png";
import Avatar3 from "../../assets/images/Avatar3.png";

const StillHaveQuestion = () => {
  return (
    <section className="section3 py-6" style={{marginTop: "10rem"}}>
      <div className="container">
        <div className="row">
          {/* Left Side: Image */}
          <div className="col-lg-5 col-md-5 col-sm-12 image-container">
            <img src={Section3Image} className="img-fluid" />
          </div>

          {/* Right Side: Text, Heading, Description, and Button */}
          <div className="col-lg-7 col-md-7 col-sm-12 text-container text-center">
          <div className="avatar-container">
              <img src={Avatar1} alt="Avatar 1" className="avatar" />
              <img src={Avatar2} alt="Avatar 2" className="avatar center-avatar" />
              <img src={Avatar3} alt="Avatar 3" className="avatar" />
            </div>
            <h2 >
            Still have questions?
            </h2>
            <p className="fw-bold" style={{ fontSize: "18px", color: "rgba(209, 209, 209, 1)" }}>
            Can’t find the answer you’re looking for? Please chat to our friendly team.
            </p>
            <div className="button-container">
              <a
                href="/"
                className="btn get-started-btn"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StillHaveQuestion;
