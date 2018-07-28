import React, { Component } from 'react';
import ScreensRoot from './screens/Root';

import { Provider } from "react-redux";

class App extends Component {
  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <ScreensRoot />
      </Provider>
    );
  }
}

export default App;
