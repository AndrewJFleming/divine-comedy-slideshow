import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';

import Home from './containers/Home/Home';

class App extends Component {
  
  render() {
    return (
      <BrowserRouter basename={'/divine-comedy-slideshow'}>
          <Home />
      </BrowserRouter>
    );
  }
}

export default App;
