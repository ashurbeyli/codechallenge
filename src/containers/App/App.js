import React, { Component } from 'react';

import RuleList from '../RuleList/RuleList';

import styles from './App.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <RuleList/>
      </div>
    );
  }
}

export default App;
