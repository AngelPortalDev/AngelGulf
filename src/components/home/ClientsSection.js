import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./HomeLayout.css";

const ClientsSection = ({ clientImages }) => {
  if (!clientImages || clientImages.length === 0) {
    return null;
  }

  return (
    <section className="home-section home-clients-section">
      <div className="container">
        <div className="home-clients-slider-wrapper">
          <Swiper
            slidesPerView={2}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={3000}
            modules={[Autoplay]}
            className="home-clients-slider"
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 15 },
              480: { slidesPerView: 3, spaceBetween: 20 },
              768: { slidesPerView: 4, spaceBetween: 25 },
              1024: { slidesPerView: 5, spaceBetween: 30 },
              1280: { slidesPerView: 6, spaceBetween: 30 },
            }}
          >
            {clientImages.map((image, index) => (
              <SwiperSlide key={image.title || index}>
                <div className="home-client-logo-item">
                  <img
                    src={image.src}
                    alt={image.alt || `Client ${index + 1}`}
                    title={image.title || `Client ${index + 1}`}
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <p className="home-clients-bottom-label">TRUSTED BY LEADING GLOBAL ORGANIZATIONS</p>
      </div>
    </section>
  );
};

export default ClientsSection;
