"use client";
import React, { FC, useCallback, useState } from "react";
import Projects from "./Projects";

import Container from "../components/Container";
import dynamic from "next/dynamic";
import { WorkWrapperProps } from "./types";

const ImageViewer = dynamic(
  () => import("@/components/ImageViewer/ImageViewer"),
  {
    ssr: false
  }
);

const WorkWrapper: FC<WorkWrapperProps> = ({ projects }) => {
  const images = projects.map((item) => ({ src: `/images/${item.image}` }));
  const [imgViewerState, setImgViewerState] = useState({
    isOpen: false,
    selectedIndex: 0
  });

  const onImageCick = useCallback((imageIndex: number) => {
    setImgViewerState({
      isOpen: true,
      selectedIndex: imageIndex
    });
  }, []);

  const onPrevImage = useCallback(
    () =>
      setImgViewerState((prev) => ({
        ...prev,
        selectedIndex: prev.selectedIndex - 1
      })),
    []
  );

  const onNextImage = useCallback(
    () =>
      setImgViewerState((prev) => ({
        ...prev,
        selectedIndex: prev.selectedIndex + 1
      })),
    []
  );

  const onCloseImageViewer = useCallback(() => {
    setImgViewerState({
      isOpen: false,
      selectedIndex: 0
    });
  }, []);

  return (
    <Container>
      <Projects projects={projects} onImageCick={onImageCick} />
      {imgViewerState.isOpen && (
        <ImageViewer
          images={images}
          currentImage={imgViewerState.selectedIndex}
          onClose={onCloseImageViewer}
          onPrevImage={onPrevImage}
          onNextImage={onNextImage}
        />
      )}
    </Container>
  );
};

export default WorkWrapper;
