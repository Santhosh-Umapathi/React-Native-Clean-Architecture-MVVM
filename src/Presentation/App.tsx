import React from 'react';
import {RecoilRoot} from 'recoil';
import MainNavigator from './screens/Home';

const App = () => {
  return (
    <RecoilRoot>
      <MainNavigator />
    </RecoilRoot>
  );
};

export default App;
