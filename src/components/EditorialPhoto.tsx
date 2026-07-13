import { useState } from "react";

interface EditorialPhotoProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
  warm?: boolean;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
}

const EditorialPhoto = ({
  src,
  alt,
  fallbackSrc,
  warm = false,
  priority = false,
  className = "",
  imgClassName = "",
}: EditorialPhotoProps) => {
  const [activeSrc, setActiveSrc] = useState(src);

  return (
    <div className={`ph relative overflow-hidden ${warm ? "warm" : ""} ${className}`}>
      <div
        className="fallback absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,#2a2a28_0%,#0a0a0a_70%)]"
        aria-hidden
      />
      <img
        src={activeSrc}
        alt={alt}
        width={1200}
        height={1500}
        loading={priority ? "eager" : "lazy"}
        {...(priority ? { fetchpriority: "high" as const } : {})}
        decoding="async"
        className={`relative z-[1] h-full w-full object-cover ${imgClassName}`}
        onError={() => {
          if (fallbackSrc && activeSrc !== fallbackSrc) setActiveSrc(fallbackSrc);
        }}
      />
    </div>
  );
};

export default EditorialPhoto;
