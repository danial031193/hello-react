import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { List, Spinner } from 'reactstrap';
import { getSingleRepo, getSingleRepoSuccess } from '@store/repos/action-creators';
import styles from './styles.module.scss';

const Repo = () => {
  const { owner, repo } = useParams();

  const item = useSelector((state) => state.repos.item.result, shallowEqual);
  const loading = useSelector((state) => state.repos.item.loading);

  const dispatch = useDispatch();

  useEffect(() => dispatch(getSingleRepo(`${owner}/${repo}`)), [dispatch, owner, repo]);

  useEffect(() => {
    return () => dispatch(getSingleRepoSuccess({}));
  }, [dispatch]);

  if (loading) {
    return (
      <div className={styles.loader}>
        <Spinner>Loading...</Spinner>
      </div>
    );
  }

  return (
    <div>
      <img src={item?.owner?.avatar_url} alt="avatar_url" />

      <List>
        <li>Название репозитория: {item?.name}</li>
        <li>Kол-во звёзд: {item?.stargazers_count}</li>
        <li>Дата последнего коммита: {item?.updated_at}</li>
        <li>
          Nickname:{' '}
          <a href={item?.html_url} target="_blank" rel="noreferrer">
            {item?.owner?.login}
          </a>
        </li>
        <li>Список используемых языков: {item?.language}</li>
        <li>Краткое описание: {item?.description}</li>
        <li>
          10 наиболее активных контрибьютеров
          <ul>
            {item?.contributors?.map(({ id, login }) => {
              return <li key={id}>{login}</li>;
            })}
          </ul>
        </li>
      </List>
    </div>
  );
};

export default Repo;
