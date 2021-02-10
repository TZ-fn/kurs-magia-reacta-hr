import React, { Component } from 'react';
import cx from 'classnames';
import styles from './ItemsList.module.scss';

const items = ['Document 1', 'Document 2', 'Document 3', 'Document 4'];

class ItemsList extends Component {
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

    const listClass = cx(styles.list, {
      [styles.isCollapsed]: isCollapsed,
    });

    return (
      <div>
        <button type='button' className='button is-dark is-large' onClick={this.toggle}>
          Collapse
        </button>
        <ul className={listClass}>
          {items.map((item) => {
            return <li className='notification is-primary'>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default ItemsList;
