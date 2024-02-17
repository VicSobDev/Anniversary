// apiService.js
import Cookies from "js-cookie";

const BASE_URL = "http://localhost:8080/api";

/**
 * Fetches the total number of pictures and calculates the total pages.
 * @returns {Promise<number>} The total number of pages.
 */
export const fetchTotalPictures = async () => {
  const token = Cookies.get("token");
  try {
    const response = await fetch(`${BASE_URL}/pictures_total`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (response.ok) {
      const { total } = await response.json();
      return total;
    } else {
      console.error("Failed to fetch total pictures:", response.statusText);
      return 0;
    }
  } catch (error) {
    console.error("Failed to fetch total pictures:", error);
    return 0;
  }
};

/**
 * Fetches data for a single picture by its name.
 * @param {string} name The name of the picture.
 * @returns {Promise<object|null>} The picture data or null if an error occurs.
 */
export const fetchPictureData = async (name) => {
  const token = Cookies.get("token");
  try {
    const response = await fetch(`${BASE_URL}/picture?name=${name}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (response.ok) {
      const blob = await response.blob();
      return {
        name,
        url: URL.createObjectURL(blob),
      };
    } else {
      console.error("Failed to fetch picture data:", response.statusText);
      return null;
    }
  } catch (error) {
    console.error("Failed to fetch picture data:", error);
    return null;
  }
};

/**
 * Uploads pictures.
 * @param {FormData} formData The form data containing the pictures to upload.
 */
export const uploadPictures = async (formData) => {
  const token = Cookies.get("token");
  try {
    const response = await fetch(`${BASE_URL}/picture`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    });
    if (!response.ok) {
      console.error("Failed to upload pictures:", response.statusText);
    }
  } catch (error) {
    console.error("Failed to upload pictures:", error);
  }
};

/**
 * Fetches a list of pictures with pagination.
 * @param {number} limit The number of pictures per page.
 * @param {number} offset The offset for pagination.
 * @returns {Promise<Array>} A list of picture data.
 */
export const fetchPictures = async (limit, offset) => {
  const token = Cookies.get("token");
  try {
    const response = await fetch(
      `${BASE_URL}/pictures?limit=${limit}&offset=${offset}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    if (response.ok) {
      const jsonData = await response.json();
      // Map over jsonData to return an array of picture names
      return jsonData.map(item => item.name);
    } else {
      console.error("Failed to fetch pictures:", response.statusText);
      return [];
    }
  } catch (error) {
    console.error("Failed to fetch pictures:", error);
    return [];
  }
};

