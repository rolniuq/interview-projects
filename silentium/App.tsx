import React from 'react';
import {SafeAreaView} from 'react-native';
import Header from './src/components/Header';
import Home from './src/pages/Home';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />
      <Home />
    </SafeAreaView>
  );
};

export default App;
