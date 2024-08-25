"use client";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function QandACarousel() {
  return (
    <Carousel
      showArrows={true}
      showStatus={false}
      showThumbs={false}
      renderArrowNext={(onClickHandler, hasNext, label) => {
        if (!hasNext) {
          return null;
        }
        return (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{
              position: "absolute",
              top: "50%",
              right: "0",
              transform: "rotate(-90deg)",
              zIndex: 2,
              background: "transparent",
              border: "none",
              cursor: "pointer",
              borderRadius: "50% 50% 0 0",
              backgroundColor: "#ca3b3b",
              color: "white",
              padding: "1rem",
              height: "50px",
            }}
          >
            <i className="ti ti-arrow-down"></i>
          </button>
        );
      }}
      renderArrowPrev={(onClickHandler, hasPrev, label) => {
        if (!hasPrev) {
          return null;
        }
        return (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{
              position: "absolute",
              top: "50%",
              left: "0",
              transform: "rotate(90deg)",
              zIndex: 2,
              background: "transparent",
              border: "none",
              cursor: "pointer",
              borderRadius: "50% 50% 0 0",
              backgroundColor: "#ca3b3b",
              color: "white",
              padding: "1rem",
              height: "50px",
            }}
          >
            <i className="ti ti-arrow-down"></i>
          </button>
        );
      }}
    >
      <div>
        <img
          src="/spread.jpg"
          alt="Maymun Çiçeği Nasıl Bulaşır?"
          className="rounded-sm"
          style={{
            objectFit: "cover",
            height: "600px",
          }}
        />
      </div>
      <div>
        <img
          src="/slider_2.jpg"
          alt="Maymun Çiçeği Tedavisi"
          className="rounded-sm"
          style={{
            objectFit: "cover",
            height: "600px",
          }}
        />
      </div>
      <div>
        <img
          src="/slider_3.jpg"
          alt="Maymun Çiçeği A
                şısı"
          className="rounded-sm"
          style={{
            objectFit: "cover",
            height: "600px",
          }}
        />
      </div>
    </Carousel>
  );
}
