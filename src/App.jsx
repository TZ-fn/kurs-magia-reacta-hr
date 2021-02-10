import React from 'react';
import ItemsList from 'components/ItemsList/ItemsList';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <ItemsList />
    </div>
  );
}

export default App;
