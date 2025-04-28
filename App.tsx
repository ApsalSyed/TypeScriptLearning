import React from 'react';
import HomePage from './src/page/home-page';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <HomePage />
    </SafeAreaProvider>
  );
};
export default App;
