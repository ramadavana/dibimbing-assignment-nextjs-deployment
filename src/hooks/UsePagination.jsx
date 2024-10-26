import { useState } from "react";

export default function UsePagination(foods) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Adjust based on your preference

  // Calculate total pages
  const totalPages = Math.ceil(foods.length / itemsPerPage);

  // Calculate the index of the first and last item on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Slice the foods array to get only the items for the current page
  const currentFoods = foods.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return {
    currentFoods,
    handleNextPage,
    handlePrevPage,
    currentPage,
    totalPages,
  };
}
