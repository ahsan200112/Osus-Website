import React from "react";
import "./FeaturesSection3.css";
import Slider from "react-slick";  // Import React Slick
import 'slick-carousel/slick/slick.css'; // Import Slick Carousel CSS
import 'slick-carousel/slick/slick-theme.css'; // Import Slick Carousel Theme CSS
import Retail from '../../assets/images/RetailStore.png';
import Restaurant from '../../assets/images/Restaurant.png';
import Services from '../../assets/images/Services.png';
import { useTranslation } from 'react-i18next';

function FeaturesSection3() {
  const { t } = useTranslation();  // Initialize translation
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
        <h2 className="text-center mb-4 top-head">{t('Our Industry-Specific Solutions')}</h2>
        <p className="text-center mb-5 top-p">
         {t('Every business is unique, and so are its challenges. Thats why we have tailored our POS solutions to meet the needs of specific industries.')}
        </p>

        {/* React Slick Slider */}
        <Slider {...settings}>
          {/* Box 1 */}
          <div className="feature-box p-4 transition-effect">
            <h4>{('Retail Stores')}</h4>
            <p>
             {t('Streamline your retail operations with tools designed to enhance efficiency and customer satisfaction.')}
            </p>
            <div className="feature-icon">
              <img src={Retail} />
            </div>
          </div>

          {/* Box 2 */}
          <div className="feature-box p-4 transition-effect">
            <h4>{t('Restaurants and Cafes')}</h4>
            <p>
             {t(' Elevate your dining experience with features tailored for restaurants and cafes. Manage tables efficiently.')}
            </p>
            <div className="feature-icon">
              <img src={Restaurant} />
            </div>
          </div>

          {/* Box 3 */}
          <div className="feature-box p-4 transition-effect">
            <h4>{t('Service-Businesses')}</h4>
            <p>
             {t(' Simplify operations and deliver superior service with features built for service-based businesses.')}
            </p>
            <div className="feature-icon">
              <img src={Services} />
            </div>
          </div>

          {/* Box 4 */}
          <div className="feature-box p-4 transition-effect">
            <h4>{t('Other Solutions')}</h4>
            <p>
              {t('Explore our other tailored solutions for various industries to enhance operational efficiency.')}
            </p>
            <div className="feature-icon">
              <img src={Services} />
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default FeaturesSection3;
