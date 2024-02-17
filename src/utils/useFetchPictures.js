import { useState, useEffect } from "react";
import {
  fetchTotalPictures,
  fetchPictures,
  fetchPictureData,
} from "./apiService"; // Adjust the import path as needed

const useFetchPictures = (isSpecialDay, picturesPerPage = 20) => {
  const [pictures, setPictures] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const init = async () => {
      setIsLoading(true);

      try {
        const total = await fetchTotalPictures();
        setTotalPages(Math.ceil(total / picturesPerPage));

        if (isSpecialDay) {
          await fetchAndSetPictures();
        }
      } catch (error) {
        console.error("Error fetching total pictures:", error);
      }

      setIsLoading(false);
    };

    init();
  }, []); // Empty dependency array for initialization logic

  useEffect(() => {
    if (isSpecialDay) {
      fetchAndSetPictures();
    }
  }, [currentPage, isSpecialDay]); // Depend on currentPage and isSpecialDay to refetch when needed

  const fetchAndSetPictures = async () => {
    setIsLoading(true);
    const offset = (currentPage - 1) * picturesPerPage;

    try {
      const names = await fetchPictures(picturesPerPage, offset);
      const picsPromises = names.map((name) => fetchPictureData(name));
      const pics = await Promise.all(picsPromises);
      setPictures(pics.filter(Boolean)); // Filter out any potential null values
    } catch (error) {
      console.error("Error fetching pictures:", error);
    }

    setIsLoading(false);
  };

  return { pictures, isLoading, totalPages, currentPage, setCurrentPage };
};

export default useFetchPictures;
