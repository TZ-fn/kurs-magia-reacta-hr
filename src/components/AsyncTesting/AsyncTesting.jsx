import React, { useEffect, useState } from 'react';
import rootAPI from '../../api';
import UsersList from '../Users/UsersList';
import { getData } from '../utils/helpers';

function AsyncTesting() {
  const [usersData, setUsersData] = useState([]);
  const [errors, setErrors] = useState(false);

  useEffect(() => {
    getData(rootAPI, setUsersData, setErrors);
  }, []);

  return (
    <div>
      <h2 className='title is-3'>Async Testing</h2>
      <UsersList users={usersData} />
      {errors && (
        <div className='notification is-warning'>
          There was a problem with the server, please try again later.
        </div>
      )}
    </div>
  );
}

export default AsyncTesting;
