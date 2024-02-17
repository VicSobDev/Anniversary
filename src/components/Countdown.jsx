import React, { useState, useRef } from "react";
import { styles } from "../styles/CountdownTimerStyles";
import { uploadPictures } from "../utils/apiService";
import ImageModal from "./ImageModal";
import useSpecialDay from "../utils/useSpecialDay";
import useFetchPictures from "../utils/useFetchPictures";
import ImageUploadButton from "./ImageUploadButton";
import ImageGallery from "./ImageGallery";
import CountdownDisplay from "./CountdownDisplay";
import PaginationControls from "./PaginationControls";

const CountdownTimer = () => {
  // Constants for the special days
  const targetDay = 17; // Day of the month for the recurring special day
  const valentinesMonth = 1; // Month index for Valentine's Day (February is 1, January is 0)
  const valentinesDay = 14; // Day of the month for Valentine's Day

  // State and hooks for special day and fetching pictures
  const { isSpecialDay, countdown } = useSpecialDay(
    targetDay,
    valentinesMonth,
    valentinesDay
  );
  const { pictures, isLoading, totalPages, currentPage, setCurrentPage } =
    useFetchPictures(isSpecialDay);

  // State for managing selected picture and upload status
  const [selectedPicture, setSelectedPicture] = useState(null);
  const [uploading, setUploading] = useState(false);

  // Ref for the file input for uploads
  const fileInputRef = useRef(null);

  // Handler for file upload process
  const handlePictureUpload = async (event) => {
    const files = event.target.files;
    if (!files.length) return; // Exit if no files selected

    // Prepare the data for upload
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("pictures", files[i]);
    }

    // Set uploading state and perform the upload
    setUploading(true);
    await uploadPictures(formData); // Upload pictures to the server
    setUploading(false); // Reset uploading state after upload completes
  };

  // Component rendering
  return (
    <div>
      {/* Upload button that triggers the file input click event */}
      <ImageUploadButton
        uploading={uploading}
        handleUploadClick={() => fileInputRef.current.click()}
      />

      {/* Hidden file input for handling file uploads */}
      <input
        accept="image/jpeg"
        type="file"
        ref={fileInputRef}
        onChange={handlePictureUpload}
        style={{ display: "none" }}
        multiple
      />

      {/* Conditional rendering based on loading state and if it's a special day */}
      {isLoading ? (
        <div style={styles.loadingStyle}>Loading...</div>
      ) : isSpecialDay ? (
        <>
          {/* Image gallery and pagination controls only shown on special days */}
          <ImageGallery
            pictures={pictures}
            setSelectedPicture={setSelectedPicture}
          />
          <PaginationControls
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        </>
      ) : (
        <>
          {/* Countdown display shown when it's not a special day */}
          <CountdownDisplay countdown={countdown} />
        </>
      )}

      {/* Modal for selected picture */}
      {selectedPicture && (
        <ImageModal
          picture={selectedPicture}
          onClose={() => setSelectedPicture(null)}
        />
      )}
    </div>
  );
};

export default CountdownTimer;
