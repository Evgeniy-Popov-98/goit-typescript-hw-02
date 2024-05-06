export interface ImageType {
  id: number;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
  user: {
    location: string;
  };
  likes: number;
}