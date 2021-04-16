import React, { Component } from 'react';
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
import TestingSandbox from './components/views/TestingSandbox';
import styles from './App.module.scss';
import LangContext from './context';

class App extends Component {
  state = {
    currentLanguage: 'en',
    setLanguage: this.setLanguage,
  };

  // setLanguage = (lang) => {
  //   this.setState({ currentLanguage: lang });
  // };
  render() {
    const { currentLanguage, setLanguage } = this.state;
    return (
      <Router>
        <LangContext.Provider value={{ currentLanguage, setLanguage }}>
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
            <Route path='/testingSandbox' exact component={TestingSandbox} />
          </div>
        </LangContext.Provider>
      </Router>
    );
  }
}

export default App;
