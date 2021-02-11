import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Tips from './views/Tips';
import Patterns from './views/Patterns';
import Components from './views/Components';
import Documents from './views/Documents';
import styles from './App.module.scss';

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Header />
        <Route path='/' exact component={Documents} />
        <Route path='/tips' exact component={Tips} />
        <Route path='/patterns' exact component={Patterns} />
        <Route path='/components' exact component={Components} />
      </div>
    </Router>
  );
}

export default App;
