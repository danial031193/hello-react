import React from 'react';
import ReposSearch from './search';
import ReposTable from './table';
import TablePagination from './pagination';

const Home = () => {
  return (
    <>
      <ReposSearch />
      <ReposTable />
      <TablePagination />
    </>
  );
};

export default Home;
