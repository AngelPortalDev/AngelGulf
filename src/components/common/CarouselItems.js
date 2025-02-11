import React from "react";

const CarouselItems = ({
  images,
  titles, 
  altTexts,
  interval = 1500, 
}) => {
  

  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval={interval}
    >
      {/* Carousel Indicators */}
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Carousel Inner (Items) */}
      <div className="carousel-inner">
        {images.map((img, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
            <img src={img} className="d-block w-100" alt={altTexts[index]} />
            <div className="carousel-caption d-none d-md-block bg-dark text-white py-2 mb-3">
              <h5 className="text-white mb-0">{titles[index]}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselItems;
