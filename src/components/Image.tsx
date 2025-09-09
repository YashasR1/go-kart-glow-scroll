import { useState } from "react";

const Image = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} transition-opacity duration-500 ${
        imageLoaded ? "opacity-100" : "opacity-0"
      }`}
      onLoad={() => setImageLoaded(true)}
      loading="lazy"
    />
  );
};

export default Image;