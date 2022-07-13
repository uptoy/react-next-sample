import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchUsers,
  removeUser,
  selectTotalUsers,
  selectAllUsers
} from "./usersSlice";
import styles from "./UsersList.module.css";

export function UsersList() {
  const count = useSelector(selectTotalUsers);
  const users = useSelector(selectAllUsers);
  const usersLoading = useSelector(state => state.users.loading);
  const dispatch = useDispatch();

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Fetch Users"
          onClick={() => dispatch(fetchUsers())}
          disabled={usersLoading}
        >
          Fetch Users
        </button>
      </div>
      <div className={styles.row}>
        There are <span className={styles.value}>{count}</span> users.{" "}
        {count === 0 && `Why don't you fetch some more?`}
      </div>
      {users.map(user => (
        <div className={styles.row} key={user.id}>
          <div style={{ width: "80%" }}>{`${user.first_name} ${
            user.last_name
          }`}</div>
          <div style={{ width: "20%" }}>
            <button onClick={() => dispatch(removeUser(user.id))}>
              remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
