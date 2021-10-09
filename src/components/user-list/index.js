import React from 'react'
import * as PropTypes from 'prop-types'
import User from '../user'
import styles from './styles.module.scss';

const data = [
  {id: "uniq1", name:"Paul"},
  {id: "uniq2", name:"Mary"},
  {id: "uniq3", name:"Viktor"},
  {id: "uniq4", name:"Suzanna"},
  {id: "uniq5", name:"Peter"},
  {id: "uniq6", name:"Vladislav"},
  {id: "uniq7", name:"Anna"}
]

const UserList = ({ id }) => {
  return (
    <div className={styles.list}>
      <p>ID: {id}</p>
      {data.map(({ id, name }) => <User key={id} name={name} />)}
    </div>
  )
}

UserList.propTypes = {
  id: PropTypes.string.isRequired,
}

export default UserList
