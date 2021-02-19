import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Tips from './components/views/Tips';
import Patterns from './components/views/Patterns';
import Components from './components/views/Components';
import Documents from './components/views/Documents';
import styles from './App.module.scss';

function App() {
  return (
    <Router>
      <Header />
      <div className={styles.app}>
        <Route path='/' exact component={Documents} />
        <Route path='/tips' exact component={Tips} />
        <Route path='/patterns' exact component={Patterns} />
        <Route path='/components' exact component={Components} />
      </div>
    </Router>
  );
}

export default App;
