import React from 'react';
import { styles } from '../styles/CountdownTimerStyles';

// The ImageUploadButton component is responsible for rendering the upload button and indicating the upload progress.
// It accepts two props: 
// - 'uploading': a boolean that indicates whether an upload is in progress
// - 'handleUploadClick': a function to call when the button is clicked
const ImageUploadButton = ({ uploading, handleUploadClick }) => {
  return (
    <div>
      {/* The button for uploading new pictures. When clicked, it calls the handleUploadClick function passed as a prop. */}
      <div style={styles.addButton} onClick={handleUploadClick}>
        Upload New Picture
      </div>
      {/* If the 'uploading' prop is true, display a text indicator for the upload progress. */}
      {uploading && <p>Uploading...</p>}
    </div>
  );
};

// Exporting ImageUploadButton for use in other parts of the application.
export default ImageUploadButton;
