import React from "react";
import "./FeaturesSection3.css";
import Slider from "react-slick";  // Import React Slick
import 'slick-carousel/slick/slick.css'; // Import Slick Carousel CSS
import 'slick-carousel/slick/slick-theme.css'; // Import Slick Carousel Theme CSS
import Retail from '../../assets/images/RetailStore.png';
import Restaurant from '../../assets/images/Restaurant.png';
import Services from '../../assets/images/Services.png';

function FeaturesSection3() {
  const settings = {
    infinite: true, // Enable infinite looping
    speed: 500, // Speed of transition between slides
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Enable auto-play
    autoplaySpeed: 3000, // Slide change every 3 seconds
    dots: true, // Enable pagination dots
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // 3 slides for medium screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // 2 slides for smaller screens
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // 1 slide for mobile screens
        },
      },
    ],
  };

  return (
    <section className="feature-section">
      <div className="container">
        <h2 className="text-center mb-4 top-head">Our Industry-Specific Solutions</h2>
        <p className="text-center mb-5 top-p">
          Every business is unique, and so are its challenges. That's why we've tailored our POS solutions to meet the needs of specific industries.
        </p>

        {/* React Slick Slider */}
        <Slider {...settings}>
          {/* Box 1 */}
          <div className="feature-box p-4 transition-effect">
            <h4>Retail Stores</h4>
            <p>
              Streamline your retail operations with tools designed to enhance efficiency and customer satisfaction.
            </p>
            <div className="feature-icon">
              <img src={Retail} alt="Retail Stores" />
            </div>
          </div>

          {/* Box 2 */}
          <div className="feature-box p-4 transition-effect">
            <h4>Restaurants and Cafes</h4>
            <p>
              Elevate your dining experience with features tailored for restaurants and cafes. Manage tables efficiently.
            </p>
            <div className="feature-icon">
              <img src={Restaurant} alt="Restaurants and Cafes" />
            </div>
          </div>

          {/* Box 3 */}
          <div className="feature-box p-4 transition-effect">
            <h4>Service-Businesses</h4>
            <p>
              Simplify operations and deliver superior service with features built for service-based businesses.
            </p>
            <div className="feature-icon">
              <img src={Services} alt="Service-Businesses" />
            </div>
          </div>

          {/* Box 4 */}
          <div className="feature-box p-4 transition-effect">
            <h4>Other Solutions</h4>
            <p>
              Explore our other tailored solutions for various industries to enhance operational efficiency.
            </p>
            <div className="feature-icon">
              <img src={Services} alt="Other Solutions" />
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default FeaturesSection3;
