import React, { Component } from 'react';

const withAuth = (WrappedComponent) => {
  return class WithAuth extends Component {
    state = {
      isCollapsed: false,
    };

    render() {
      return <WrappedComponent />;
    }
  };
};

export default withAuth;
