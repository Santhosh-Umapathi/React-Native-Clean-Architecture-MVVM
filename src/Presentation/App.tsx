import React from 'react';
import {RecoilRoot} from 'recoil';
import MainNavigator from './navigation';

const App = () => {
  return (
    <RecoilRoot>
      <MainNavigator />
    </RecoilRoot>
  );
};

export default App;
