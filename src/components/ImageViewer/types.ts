type Image = {
  src: string;
};

export type ImageViewerProps = {
  images: Image[];
  onClose: () => void;
  currentImage: number;
  onPrevImage: () => void;
  onNextImage: () => void;
};
