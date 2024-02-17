// CountdownTimerStyles.js
export const styles = {
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#000000", // Light background for the container
    borderRadius: "5px", // Rounded corners for the container
    margin: "20px 0", // Add some margin to separate from content
  },
  countdownStyle: {
    fontFamily: "Inter, sans-serif",
    fontSize: "24px",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  container: {
    backgroundColor: "#000000",
  },
  pageInfo: {
    margin: "0 15px", // Space out the text from the buttons
    color: "#ffffff", // Darker color for better readability
    fontSize: "16px", // Slightly larger text
    fontFamily: "Inter, sans-serif", // Consistent font
  },
  button: {
    // New style for buttons
    padding: "10px 20px",
    fontSize: "14px",
    color: "#000000",
    backgroundColor: "#ffffff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    margin: "0 5px", // Space buttons out from each other
    fontFamily: "Inter, sans-serif",
    transition: "background-color 0.3s", // Smooth transition for hover effect
  },
  buttonDisabled: {
    // Style for disabled buttons
    backgroundColor: "#cccccc",
    cursor: "not-allowed",
  },
  inputStyle: {
    padding: "8px",
    margin: "0 5px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    width: "60px", // Fixed width for the input
  },
  submitButtonStyle: {
    padding: "10px 15px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#007bff",
    color: "white",
    cursor: "pointer",
  },
  row: {
    display: "flex",
    flexWrap: "wrap",
    padding: "0 4px",
  },
  column: {
    flex: "25%",
    padding: "0 4px",
  },
  image: {
    marginTop: "8px",
    verticalAlign: "middle",
    flex: "25%",
  },
  image: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    maxHeight: "100%",
  },
  addButton: {
    position: "fixed",
    top: "20px",
    right: "20px",
    padding: "10px 20px",
    background: "#007bff",
    color: "#ffffff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontFamily: "Inter, sans-serif",
  },
  downloadButton: {
    position: "absolute",
    top: "10px",
    left: "10px",
    border: "none",
    cursor: "pointer",
    width: "32px",
  },
  imageContainer: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    marginBottom: "10px",
    cursor: "pointer",
  },
  imageInfo: {
    display: "none",
    position: "absolute",
    bottom: "0",
    background: "rgba(0, 0, 0, 0.5)",
    color: "#fff",
    width: "100%",
    textAlign: "center",
    padding: "5px 0",
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modalContent: {
    position: "relative",
    background: "#fff",
    borderRadius: "4px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "90vw",
    maxHeight: "90vh",
    overflowY: "auto",
  },
  fullImage: {
    maxWidth: "90vw",
    maxHeight: "90vh",
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "transparent",
    border: "none",
    color: "#000000",
    fontSize: "32px",
    cursor: "pointer",
  },
  imageDownloadContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  loadingStyle: {
    fontFamily: "Inter, sans-serif",
    fontSize: "24px",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
};
