import React from 'react';
import { styles } from '../styles/CountdownTimerStyles';

// ImageModal component is a presentational component that renders a modal with the selected image.
// It receives two props: 'picture', which is the object containing image details, and 'onClose', a function to close the modal.
const ImageModal = ({ picture, onClose }) => {
  // If there is no picture object provided, do not render the modal.
  if (!picture) return null;

  // handleDownload is a function to trigger the download of the picture.
  const handleDownload = () => {
    // Create an 'a' HTML element and set its 'href' to the picture's URL and 'download' attribute to the picture's filename.
    const link = document.createElement('a');
    link.href = picture.url;
    link.download = picture.name; // The filename for the download.
    // Append the link to the body, trigger the click to download, then remove the link element.
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // The modal structure with overlay and content.
  return (
    <div style={styles.modalOverlay}>
      <div style={styles.modalContent}>
        {/* Close button to dismiss the modal */}
        <button style={styles.closeButton} onClick={onClose}>
          &times; {/* This renders a '×' symbol used commonly for close buttons */}
        </button>
        {/* Download button which, when clicked, will trigger the handleDownload function */}
        <img
          src="download.svg" 
          style={styles.downloadButton}
          onClick={handleDownload}
          alt="Download"
        />
        {/* Container for the full image */}
        <div style={styles.imageDownloadContainer}>
          {/* The full-size image itself */}
          <img
            src={picture.url}
            alt={picture.name}
            style={styles.fullImage}
          />
        </div>
      </div>
    </div>
  );
};

// Export the ImageModal component for use in other parts of the application.
export default ImageModal;
