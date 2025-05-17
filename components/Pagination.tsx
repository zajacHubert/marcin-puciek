'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import styles from './pagination.module.css';

type PaginationProps = {
  totalPages: number;
  siblingCount?: number;
};

const range = (start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (_, i) => i + start);

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  siblingCount = 1,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const createPageLink = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    if (page === 1) {
      params.delete('page');
    } else {
      params.set('page', page.toString());
    }
    return `?${params.toString()}`;
  };

  const goToPage = (page: number) => {
    router.push(createPageLink(page));
  };

  const getPageNumbers = () => {
    const totalNumbers = siblingCount * 2 + 3; // current, first, last
    const totalBlocks = totalNumbers + 2; // +2 for the two dots

    if (totalPages <= totalBlocks) {
      return range(1, totalPages);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 1;

    const firstPage = 1;
    const lastPage = totalPages;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftRange = range(1, 1 + 2 + siblingCount * 2);
      return [...leftRange, '...', lastPage];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightRange = range(totalPages - (2 + siblingCount * 2), totalPages);
      return [firstPage, '...', ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPage, '...', ...middleRange, '...', lastPage];
    }
  };

  const pageNumbers = getPageNumbers();

  if (totalPages <= 1) return null;

  return (
    <div className={styles.pagination}>
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage <= 1}
        className={styles.button}
      >
        ◀
      </button>

      {pageNumbers?.map((page, index) =>
        page === '...' ? (
          <span key={`dots-${index}`} className={styles.dots}>
            ...
          </span>
        ) : (
          <button
            key={`page-${page}`}
            onClick={() => goToPage(Number(page))}
            className={`${styles.button} ${
              page === currentPage ? styles.active : ''
            }`}
          >
            {page}
          </button>
        )
      )}

      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className={styles.button}
      >
        ▶
      </button>
    </div>
  );
};

export default Pagination;
