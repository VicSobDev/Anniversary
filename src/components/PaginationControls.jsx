import React, { useState } from 'react';
import { styles } from '../styles/CountdownTimerStyles';

// PaginationControls component provides a UI for page navigation within a paginated list.
// It accepts three props:
// - 'currentPage': the current active page number
// - 'totalPages': the total number of pages available
// - 'setCurrentPage': a function to update the current page
const PaginationControls = ({ currentPage, totalPages, setCurrentPage }) => {
  // State to hold and manage the page number input by the user
  const [inputPage, setInputPage] = useState(currentPage);

  // Event handler for changes to the page number input
  // Converts the input value to a number and updates the state
  const handlePageInputChange = (e) => {
    const newPage = parseInt(e.target.value, 10); // Parse the input value as a base-10 integer
    if (!isNaN(newPage)) setInputPage(newPage); // Update only if the value is a number
  };

  // Function to submit the new page number and update the current page
  // Ensures the new page number is within the valid range before updating
  const submitPageNumber = () => {
    if (inputPage >= 1 && inputPage <= totalPages) {
      setCurrentPage(inputPage);
    }
  };

  // Function to go to the next page, with a check to ensure it does not exceed totalPages
  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  // Function to go to the previous page, with a check to ensure it does not go below 1
  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  // Render the pagination controls UI
  return (
    <div style={styles.paginationContainer}>
      {/* Button to navigate to the previous page */}
      <button
        onClick={goToPreviousPage}
        disabled={currentPage === 1} // Disable if already on the first page
        style={styles.button}
      >
        Previous
      </button>

      {/* Current page display and input for direct page navigation */}
      <span style={styles.pageInfo}>
        Page
        <input
          type="number"
          value={inputPage}
          onChange={handlePageInputChange}
          onBlur={submitPageNumber} // Submit on input field blur
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              submitPageNumber(); // Submit on pressing 'Enter' key
            }
          }}
          style={styles.inputStyle}
          min="1" // Minimum page number is 1
          max={totalPages} // Maximum page number is the total number of pages
        />
        of {totalPages}
      </span>

      {/* Button to submit the page number entered */}
      <button
        onClick={submitPageNumber}
        style={styles.submitButtonStyle}
      >
        Go
      </button>

      {/* Button to navigate to the next page */}
      <button
        onClick={goToNextPage}
        disabled={currentPage === totalPages} // Disable if already on the last page
        style={styles.button}
      >
        Next
      </button>
    </div>
  );
};

// Export PaginationControls for use in other components
export default PaginationControls;
