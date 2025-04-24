import React from 'react';
import {View} from 'react-native';
import HomePage from './src/page/home-page';

const App: React.FC = () => {
  return (
    <View style={{flex: 1}}>
      <HomePage />
    </View>
  );
};
export default App;
