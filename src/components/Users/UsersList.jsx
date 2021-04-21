import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

const UsersList = ({ users }) => (
  <div>
    {users.length === 0 ? (
      <div>Loading users...</div>
    ) : (
      users.map((user) => <User key={user.name} name={user.name} age={user.age} />)
    )}
  </div>
);

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default UsersList;
