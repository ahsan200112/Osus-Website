import React from "react";
import "./Testimonials.css"; // Minimal custom CSS
import ProfileAvatar from "../../assets/images/ProfileAvatar.png";

const Testimonials = () => {
  return (
    <section className="testimonials-section py-5 text-center">
      <div className="container">
        {/* Section Header */}
        <h5 className="text-white mb-3" style={{ marginTop: "-20px" }}>Testimonials</h5>
        <h2
          className="text-white fw-semibold mx-auto mb-5"
          style={{ maxWidth: "800px", marginTop: "30px" }}
        >
          We’ve been using Untitled to kick start every new project and can’t imagine working without it.
        </h2>

        {/* Testimonial Content */}
        <div className="d-flex flex-column align-items-center">
          {/* Testimonial Image */}
          <div
            className="rounded-circle mb-3"
            style={{
              width: "80px",
              height: "80px",
              background: "rgba(162, 168, 205, 1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={ProfileAvatar}
              alt="Candice Wu"
              className="rounded-circle"
              style={{
                width: "70%",
                height: "70%",
              }}
            />
          </div>

          {/* Testimonial Name */}
          <h6 className="text-white mb-1">Candice Wu</h6>

          {/* Testimonial Position */}
          <p className="mb-2">
            Product Manager, Sisyphus
          </p>
          <p>
          <span
              className="mx-3"
              style={{
                fontSize: "26px", // Adjusted arrow size
                fontWeight: "500",
                color: "white",
                display: "inline-block",
                transform: "scale(1.5)", // Scale arrow for better visibility
              }}
            >
              &#8592; {/* Left Arrow */}
            </span>
            <span
              className="mx-3"
              style={{
                fontSize: "26px", // Adjusted arrow size
                fontWeight: "500",
                color: "white",
                display: "inline-block",
                transform: "scale(1.5)", // Scale arrow for better visibility
              }}
            >
              &#8594; {/* Right Arrow */}
            </span>
            </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
