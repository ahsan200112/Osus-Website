import React from "react";
import Slider from "react-slick";
import "./Testimonials.css"; // Minimal custom CSS
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Candice Wu",
      position: "Product Manager, Sisyphus",
      image: require("../../assets/images/ProfileAvatar.png"),
    },
    {
      name: "John Doe",
      position: "CEO, Example Corp",
      image: require("../../assets/images/ProfileAvatar.png"), // Replace with your image path
    },
    {
      name: "Jane Smith",
      position: "Marketing Head, Alpha",
      image: require("../../assets/images/ProfileAvatar.png"), // Replace with your image path
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enables autoplay
    autoplaySpeed: 3000, // Set autoplay interval to 3 seconds
    arrows: false, // Removed side arrows
    responsive: [
      {
        breakpoint: 768, // Mobile responsiveness
        settings: {
          dots: true,
          arrows: false, // Keep arrows hidden on smaller screens as well
        },
      },
    ],
  };

  return (
    <section className="testimonials-section py-5 text-center">
      <div className="container">
        {/* Section Header */}
        <h5 className="text-white mb-3" style={{ marginTop: "-20px" }}>
          Testimonials
        </h5>
        <h2
          className="text-white fw-semibold mx-auto mb-5"
          style={{ maxWidth: "800px", marginTop: "30px" }}
        >
          We’ve been using Untitled to kick start every new project and can’t imagine working without it.
        </h2>

        {/* Testimonial Slider */}
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="d-flex flex-column align-items-center">
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
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-circle"
                  style={{
                    width: "70%",
                    height: "70%",
                  }}
                />
              </div>

              {/* Testimonial Name */}
              <h6 className="text-white mb-1">{testimonial.name}</h6>

              {/* Testimonial Position */}
              <p className="mb-2">{testimonial.position}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
