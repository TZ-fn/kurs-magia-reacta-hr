import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UseEffectSandbox from 'components/views/UseEffectSandbox';
import UseRefSandbox from 'components/views/UseRefSandbox';
import Users from 'components/views/Users';
import Header from './components/Header/Header';
import Tips from './components/views/Tips';
import Patterns from './components/views/Patterns';
import Components from './components/views/Components';
import Documents from './components/views/Documents';
import CompoundComponents from './components/views/CompoundComponents';
import MultiStepView from './components/views/MultiStepView';
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
        <Route path='/useEffectSandbox' exact component={UseEffectSandbox} />
        <Route path='/useRefSandbox' exact component={UseRefSandbox} />
        <Route path='/users' exact component={Users} />
        <Route path='/compoundComponents' exact component={CompoundComponents} />
        <Route path='/multiStepView' exact component={MultiStepView} />
      </div>
    </Router>
  );
}

export default App;
