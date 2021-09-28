import React from 'react';
import MainContent from './Components/mainContent';
import {Provider} from 'react-redux'
import store from './Redux/store'

function App() {

  return (
    <Provider store={store}>
      <MainContent/>
    </Provider>
  );
}

export default App;
