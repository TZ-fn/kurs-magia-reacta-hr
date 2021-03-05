import { Component } from 'react';
import PropTypes from 'prop-types';

class Authorisation extends Component {
  state = {
    isAuthorised: false,
  };

  toggleAuth = () => {
    this.setState((prevState) => ({
      isAuthorised: !prevState.isAuthorised,
    }));
  };

  render() {
    const { render } = this.props;
    const { isAuthorised } = this.state;
    const renderProps = {
      isAuthorised,
      toggleAuth: this.toggleAuth,
    };
    return render(renderProps);
  }
}

Authorisation.propTypes = {
  render: PropTypes.func.isRequired,
};

export default Authorisation;
