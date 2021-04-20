import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AsyncTesting() {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    const getUsersData = async () => {
      const { data } = await axios.get(
        'https://run.mocky.io/v3/5c486613-f6dd-48b4-942b-211276aef439?mocky-delay=500ms',
      );
      setUsersData(data);
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
