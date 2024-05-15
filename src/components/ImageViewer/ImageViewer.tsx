"use client";
import React from "react";
import ImgsViewer from "react-images-viewer";

const ImageViewer = ({
  images,
  onClose,
  currentImage,
  onPrevImage,
  onNextImage
}) => {
  return (
    <ImgsViewer
      isOpen
      imgs={images}
      currImg={currentImage}
      onClose={onClose}
      onClickPrev={onPrevImage}
      onClickNext={onNextImage}
    />
  );
};

export default ImageViewer;
