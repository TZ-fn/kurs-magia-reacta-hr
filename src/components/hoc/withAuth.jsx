import React, { Component } from 'react';

const withAuth = (WrappedComponent) => {
  return class WithAuth extends Component {
    state = {
      isAuthorised: false,
    };

    toggleAuth = () => {
      this.setState((prevState) => ({
        isAuthorised: !prevState.isAuthorised,
      }));
    };

    render() {
      const { isAuthorised } = this.state;
      return (
        <WrappedComponent
          isAuthorised={isAuthorised}
          toggleAuth={this.toggleAuth}
          {...this.props}
        />
      );
    }
  };
};

export default withAuth;
