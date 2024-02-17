import React from 'react';
import { styles } from '../styles/CountdownTimerStyles';

// The ImageGallery component is responsible for rendering a list of images.
// It takes two props: 'pictures', an array of picture objects, and 'setSelectedPicture', a function to set the currently selected picture.
const ImageGallery = ({ pictures, setSelectedPicture }) => {
  // We map over the 'pictures' array to create image elements for each picture.
  // Each picture object is expected to have an 'id' and a 'url'.
  return (
    <div style={styles.galleryContainer}>
      {pictures.map((pic, index) => (
        // The 'key' prop is essential for React to handle the list efficiently.
        <div key={pic.id} style={styles.imageWrapper}>
          {/* The 'src' attribute is set to the picture's URL, and 'alt' describes the image.
              When an image is clicked, 'setSelectedPicture' is called with the picture object, marking it as selected. */}
          <img
            src={pic.url}
            alt={`Picture ${index}`}
            style={styles.image}
            onClick={() => setSelectedPicture(pic)}
          />
        </div>
      ))}
    </div>
  );
};

// Exporting ImageGallery for use in other parts of the application.
export default ImageGallery;
