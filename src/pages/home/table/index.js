import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Spinner, Table } from 'reactstrap';
import styles from './styles.module.scss';

const ReposTable = () => {
  const loading = useSelector((state) => state.repos.list.loading);
  const repos = useSelector((state) => state.repos.list.result, shallowEqual);
  const current = useSelector((state) => state.repos.currentPage);

  return (
    <div className={styles.table}>
      {loading && (
        <div className={styles.loader}>
          <Spinner>Loading...</Spinner>
        </div>
      )}

      <Table bordered responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Название</th>
            <th>Звёзды</th>
            <th>Дата последнего коммита</th>
            <th>Ссылка</th>
          </tr>
        </thead>
        <tbody>
          {repos.map(({ id, name, stargazers_count, html_url, created_at, full_name }, index) => (
            <tr key={id}>
              <th scope="row">{(current - 1) * 10 + (index + 1)}</th>
              <td>
                <Link to={`/repo/${full_name}`}>{name}</Link>
              </td>
              <td>{stargazers_count}</td>
              <td>{created_at}</td>
              <td>
                <a href={html_url} target="_blank" rel="noreferrer">
                  {html_url}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ReposTable;
