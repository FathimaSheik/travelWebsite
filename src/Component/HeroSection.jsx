import React, { useEffect } from "react";
import "./HeroSection.css";
import { Link } from "react-router-dom";
const HeroSection = () => {
  useEffect(() => {
    let hero_container = document.getElementById("hero_container");
    hero_container.style.display = "block";
  });
  return (
    <>
      <div className="main">
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://miro.medium.com/v2/resize:fit:999/0*IpPuhvq5GoR0znBc.jpg"
                className="d-block w-100 carousel-image"
                alt="..."
              />
              <div className="heading">
                <h1>
                Travel far enough, <br/>
                you meet yourself.
                </h1>
                <i className="bi bi-body-text" />

                <p>
                Embark on a journey of discovery with our premium travel services. 
                <br/>From breathtaking destinations to meticulously planned itineraries.
                <br/> We curate unforgettable experiences tailored to your preferences. <br /><br /><br />
                <br/>Let us turn your wanderlust into reality and create memories that last a lifetime.
                </p>
                <Link className="Dest" to={"/DestinationSection"}>
                  <i className="bi bi-airplane" />
                  SEARCH FLIGHT
                </Link>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://w.forfun.com/fetch/f2/f289d7ca8e99fe59251d2b089485ba73.jpeg"
                className="d-block w-100 carousel-image"
                alt="..."
              />
              <div className="heading">
                <h1>
                Discover the world, <br /> your way
                </h1>
                <i className="bi bi-body-text" />

                <p>
                Indulge in a tailor-made adventure with us, 
                <br/>where every detail is crafted to match your unique desires. 
                <br/>Whether it's a serene cruise or a blissful retreat, your journey promises to be a seamless blend of 
                <br/>COMFORT and WONDER.
                </p>
                <Link className="Dest" to={"/DestinationSection"}>
                  <i className="bi bi-airplane" />
                  SEARCH FLIGHT
                </Link>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://c4.wallpaperflare.com/wallpaper/246/582/347/evening-europe-tower-bridge-london-wallpaper-preview.jpg"

                className="d-block w-100 carousel-image"
                alt="..."
              />
              <div className="heading">
                <h1>Beautiful Destinations</h1>
                <i className="bi bi-body-text" />

                <p>
                "Embark on a journey of discovery with our agency's <br />exclusive travel insights, offering captivating glimpses into uncharted territories,<br /> complemented by vivid imagery, immersive videos, and captivating articles."
                </p>
                <Link className="Dest" to={"/DestinationSection"}>
                  <i className="bi bi-airplane" />
                  SEARCH FLIGHT
                </Link>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="heading1">
          <h1>Our Assistance</h1>
          <i className="bi bi-activity"></i>
        </div>

        <div className="cardrow">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">
                <i className="bi bi-airplane" />
              </h5>
              <h5 className="card-subtitle mb-2 text-body-secondary">
                Flight Bookings
              </h5>
              <hr />
              <p className="card-text">
              You will have the freedom to secure air bookings to destinations across the globe with us. With our user-friendly website, booking your tickets online is a breeze, taking just a few easy steps.
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">
                <i className="bi bi-book-half"></i>{" "}
              </h5>
              <h5 className="card-subtitle mb-2 text-body-secondary">
                Cruise Ships Travelling
              </h5>
              <hr />
              <p className="card-text">
              In addition to standard tours and excursions, we extend a diverse selection of captivating cruises and sea voyages tailored to suit the preferences of various customers seeking extraordinary experiences.
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">
                <i className="bi bi-building"></i>
              </h5>
              <h5 className="card-subtitle mb-2 text-body-secondary">
                Luxury Hotels
              </h5>
              <hr />
              <p className="card-text">
              For opulent accommodations, we offer a handpicked selection of lavish 5-star hotels, epitomizing luxury and sophistication, ensuring your stay is nothing short of extraordinary.
              </p>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">
                <i className="bi bi-umbrella-fill"></i>
              </h5>
              <h5 className="card-subtitle mb-2 text-body-secondary">
              Customized Summer Expeditions
              </h5>
              <hr />
              <p className="card-text">
              Our agency offers diverse excursions, including bespoke summer tours, catering to clients seeking an exclusive and unforgettable vacation experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;