import React from 'react';

import Main from './components/MainComponent';

import './App.scss';

function App() {
  var test = "New One";

  function returnHelllow () {
    return test
  } 

  return (
    <div className="App">
      <Main/>
    </div>
  );
}

export default App;
