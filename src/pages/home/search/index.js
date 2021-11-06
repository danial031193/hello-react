import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from 'reactstrap';
import { setSearch } from '@store/repos/action-creators';

const ReposSearch = () => {
  const value = useSelector((state) => state.repos.search);

  const dispatch = useDispatch();

  const onChangeInput = useCallback(
    (e) => {
      dispatch(setSearch(e.target.value));
    },
    [dispatch],
  );

  return (
    <div className="mb-3">
      <Input placeholder="Search" value={value} onChange={onChangeInput} />
    </div>
  );
};

export default ReposSearch;
