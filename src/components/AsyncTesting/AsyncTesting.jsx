import React, { useEffect, useState } from 'react';
import axios from 'axios';
import rootAPI from '../../api';

function AsyncTesting() {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    const getUsersData = async () => {
      try {
        const { data } = await axios.get(rootAPI);
        setUsersData(data);
      } catch (err) {
        console.log(err);
      }
    };
    getUsersData();
  }, []);

  return (
    <div>
      <h2 className='title is-3'>Async Testing</h2>
      {usersData.length === 0 ? (
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
      )}
    </div>
  );
}

export default AsyncTesting;
