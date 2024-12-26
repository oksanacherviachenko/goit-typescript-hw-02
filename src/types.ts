export interface Image {
  id: string;
  urls: { small: string; regular?: string };
  alt_description: string | null;
}

export interface ErrorMessageProps {
  message: string;
}

export interface LoadMoreBtnProps {
  onClick: () => void;
}

export interface ImageCardProps {
  image: Image;
  onClick: () => void;
}

export interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}

export interface ImageModalProps {
  isOpen: boolean;
  image: Image;
  onClose: () => void;
}

export interface SearchBarProps {
  onSubmit: (query: string) => void;
}
