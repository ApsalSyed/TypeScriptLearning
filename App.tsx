import React from 'react';
import HomePage from './src/page/home-page';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <HomePage />
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};
export default App;
