import React, { Component } from 'react';



import Main from './Components/Containers/mainComponent';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

export default class App extends Component {

  render() {
    return (

      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>

    );
  }
}

