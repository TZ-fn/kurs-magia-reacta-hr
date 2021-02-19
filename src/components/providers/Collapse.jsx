import { Component } from 'react';
import PropTypes from 'prop-types';

class Collapse extends Component {
  state = {
    isCollapsed: false,
  };

  toggle = () => {
    this.setState((prevState) => ({
      isCollapsed: !prevState.isCollapsed,
    }));
  };

  render() {
    const { render } = this.props;
    const { isCollapsed } = this.state;
    const renderProps = {
      isCollapsed,
      toggle: this.toggle,
    };
    return render(renderProps);
  }
}

Collapse.propTypes = {
  render: PropTypes.func.isRequired,
};

export default Collapse;
