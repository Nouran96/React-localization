import React from "react";

import Header from "../components/Header";
import PropertyInfo from "../components/PropertyInfo";
import PhotosCarousel from "../components/PhotosCarousel";
import StepsSection from "../components/StepsSection";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <PropertyInfo />
      <iframe
        title="map"
        width="100%"
        height="300"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameBorder="0"
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
      ></iframe>
      <PhotosCarousel />
      <StepsSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
