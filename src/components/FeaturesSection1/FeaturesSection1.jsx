import React from "react";
import Slider from "react-slick"; // Import Slick Carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./FeaturesSection1.css";
import featureImage1 from "../../assets/images/featureImage1.png";
import featureImage2 from "../../assets/images/featureImage2.png";
import featureImage3 from "../../assets/images/featureImage3.png";

const FeaturesSection1 = () => {
  const features = [
    {
      title: "Integrated Sales and Management System",
      description:
        "Cloud-Based Cashier: Accessible from anywhere, anytime. Supports E-Invoicing; Accredited by the Zakat, Tax, and Customs Authority.",
      image: featureImage1,
    },
    {
      title: "Flexible and Seamless Payments",
      description:
        "Accept all types of payments through our partners, offering payment services in Saudi Arabia and around the world.",
      image: featureImage2,
    },
    {
      title: "Supports E-Invoicing",
      description:
        "A flexible cashier system accredited by the Zakat, Tax, and Customs Authority for issuing VAT-compliant invoices. Easily generate your invoices and access tax declaration reports effortlessly.",
      image: featureImage3,
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable auto-play
    autoplaySpeed: 3000, // Slide change every 3 seconds
    arrows: false,
  };

  return (
    <section className="features-section py-5">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h5 className="text-primary">Key Features</h5>
          <h2>Why Choose Our POS System?</h2>
          <p className="text-muted">
            Discover the features that make our POS system the ultimate tool for
            streamlining your business operations and enhancing customer
            satisfaction.
          </p>
        </div>

        {/* Mobile Slider */}
        <div className="d-lg-none">
          <Slider {...sliderSettings}>
            {features.map((feature, index) => (
              <div className="text-center p-3" key={index}>
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="img-fluid mb-3"
                />
                <h6 className="text-primary">A flexible cashier</h6>
                <h4>{feature.title}</h4>
                <p className="text-muted">{feature.description}</p>
                <a href="/" className="btn btn-primary">
                  Learn More
                </a>
              </div>
            ))}
          </Slider>
        </div>

        {/* Desktop Layout */}
        <div className="row d-none d-lg-flex">
          {features.map((feature, index) => (
            <div
              className={`col-lg-12 d-flex align-items-center mb-5 ${
                index % 2 !== 0 ? "flex-row-reverse" : ""
              }`} // Alternating layout
              key={index}
            >
              {/* Image */}
              <div className="col-md-6 text-center">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="img-fluid"
                />
              </div>

              {/* Content */}
              <div className="col-md-6">
                <h6 className="text-primary">A flexible cashier</h6>
                <h4>{feature.title}</h4>
                <p className="text-muted">{feature.description}</p>
                <a href="/" className="btn btn-primary">
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection1;
