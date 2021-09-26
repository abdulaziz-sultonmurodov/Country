import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

const Gallery = ({ countries, lastSegment }) => {
  return (
    <>
      <ImageGallery items={countries[lastSegment - 1].images} />
    </>
  );
};

export default Gallery;
