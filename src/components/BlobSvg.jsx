import React from 'react';
import './BlobSvg.css'; // Import your CSS file

const BlobSvg = ({ profilePicture }) => {
  return (
    <svg className='blobSvg'
      version="1.1"
      viewBox="0 0 500 500"
      width="100%"
      height="500px"
      id="blobSvg"
    >
 
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
      xlinkHref={profilePicture}
      preserveAspectRatio="xMidYMid slice" // Adjust the value to "slice"
      clipPath="url(#shape)"
      className="blob-image"
    />

    </svg>
  );
};

export default BlobSvg;
