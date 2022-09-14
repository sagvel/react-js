import React from 'react';

const Pagination = ({ goPrev, goNext, currentPage, totalItems, itemsPerPage }) => {
  const isFirstPage = currentPage < totalItems / itemsPerPage - 1;
  const isLastPage = currentPage > 0;
  const pageForView = currentPage + 1;
  let isPrevPageAvailable = false;
  let isNextPageAvailable = false;

  if (isFirstPage) {
    isNextPageAvailable = true;
  }

  if (isLastPage) {
    isPrevPageAvailable = true;
  }

  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev} disabled={!isPrevPageAvailable}>
        {isPrevPageAvailable && '←'}
      </button>
      <span className="pagination__page">{pageForView}</span>
      <button className="btn" onClick={goNext} disabled={!isNextPageAvailable}>
        {isNextPageAvailable && '→'}
      </button>
    </div>
  );
};

export default Pagination;