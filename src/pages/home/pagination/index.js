import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { setCurrentPage as setCurrentPageAction } from '@store/repos/action-creators';

const TablePagination = () => {
  const dispatch = useDispatch();

  const current = useSelector((state) => state.repos.currentPage);
  const total = useSelector((state) => state.repos.totalPages);

  const setCurrentPage = useCallback(
    (page) => {
      dispatch(setCurrentPageAction(page));
    },
    [dispatch],
  );

  return (
    <div className="d-flex justify-content-center">
      {total && (
        <Pagination>
          <PaginationItem onClick={() => setCurrentPage(1)}>
            <PaginationLink first href="#" />
          </PaginationItem>
          <PaginationItem onClick={() => setCurrentPage(current - 1)}>
            <PaginationLink href="#" previous />
          </PaginationItem>
          {Array(total)
            .fill(null)
            .map((_, index) => (
              <PaginationItem
                key={index}
                active={current === index + 1}
                onClick={() => setCurrentPage(index + 1)}
              >
                <PaginationLink href="#">{index + 1}</PaginationLink>
              </PaginationItem>
            ))}
          <PaginationItem onClick={() => setCurrentPage(current + 1)}>
            <PaginationLink href="#" next />
          </PaginationItem>
          <PaginationItem onClick={() => setCurrentPage(total)}>
            <PaginationLink href="#" last />
          </PaginationItem>
        </Pagination>
      )}
    </div>
  );
};

export default TablePagination;
