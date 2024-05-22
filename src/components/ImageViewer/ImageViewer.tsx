"use client";
import React, { FC } from "react";
import ImgsViewer from "react-images-viewer";
import { ImageViewerProps } from "./types";

const ImageViewer: FC<ImageViewerProps> = ({
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
