import React from 'react';
import {Text, View} from 'react-native';
import {headerStyles} from '../styles/HeaderStyle';

const Header = () => {
  return (
    <View style={headerStyles.header}>
      <Text style={headerStyles.titleText}>Hacker News</Text>
    </View>
  );
};

export default Header;
