import React, { Component } from 'react';
import cx from 'classnames';
import styles from './Columns.module.scss';

class Columns extends Component {
  state = {
    isCollapsed: false,
  };

  toggle = () => {
    this.setState((prevState) => ({
      isCollapsed: !prevState.isCollapsed,
    }));
  };

  render() {
    const { isCollapsed } = this.state;

    const columnsClass = cx('columns', {
      [styles.isCollapsed]: isCollapsed,
    });

    return (
      <>
        <button type='button' className='button is-dark is-large' onClick={this.toggle}>
          Collapse
        </button>
        <div className={columnsClass}>
          <div className='column'>
            <div className='notification is-primary'>First column</div>
          </div>
          <div className='column'>
            <div className='notification is-primary'>Second column</div>
          </div>
          <div className='column'>
            <div className='notification is-primary'>Third column</div>
          </div>
          <div className='column'>
            <div className='notification is-primary'>Forth column</div>
          </div>
        </div>
      </>
    );
  }
}

export default Columns;
