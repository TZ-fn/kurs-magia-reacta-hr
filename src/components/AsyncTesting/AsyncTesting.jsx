import React, { useEffect, useState } from 'react';
import rootAPI from '../../api';
import UsersList from '../Users/UsersList';
import { getData } from '../utils/helpers';

function AsyncTesting() {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    getData(rootAPI, setUsersData);
  }, []);

  return (
    <div>
      <h2 className='title is-3'>Async Testing</h2>
      <UsersList users={usersData} />
      {/* {usersData.length === 0 ? (
        <div>Loading users...</div>
      ) : (
        usersData.map((user) => {
          return (
            <div key={user.name}>
              <p>Name: {user.name}</p>
              <p>Age: {user.age}</p>
            </div>
          );
        })
      )} */}
    </div>
  );
}

export default AsyncTesting;
