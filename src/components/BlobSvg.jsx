import React from 'react';
import placeholderImage from '../assets/placeholder.jpg';
import './BlobSvg.css'; // Import your CSS file

const BlobSvg = () => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      width="30%"
      height="30%"
      id="blobSvg"
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: 'rgb(238, 205, 163)' }} />
          <stop offset="100%" style={{ stopColor: 'rgb(239, 98, 159)' }} />
        </linearGradient>
      </defs>
      <clipPath id="shape">
        <path
          id="blob"
          fill="url(#gradient)"
          d="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z"
          className="blob-mask" // Apply the CSS class for animation
        />
      </clipPath>
      <image
        x="0"
        y="0"
        width="100%"
        height="100%"
        xlinkHref={placeholderImage}
        preserveAspectRatio="none"
        clipPath="url(#shape)"
        className="blob-image"
      />
    </svg>
  );
};

export default BlobSvg;
