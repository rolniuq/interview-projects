import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {bestStory, newStory, topStory} from '../constants/Page';
import {NavigatorStyles} from '../styles/NavigatorStyle';

type Props = {
  testID: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const Navigator = (props: Props) => {
  return (
    <View testID={props.testID} style={NavigatorStyles.container}>
      <TouchableOpacity onPress={() => props.setValue(newStory)}>
        <Text style={[NavigatorStyles.navText, NavigatorStyles.storyText]}>
          New Stories
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.setValue(bestStory)}>
        <Text style={[NavigatorStyles.navText, NavigatorStyles.storyText]}>
          Best Stories
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.setValue(topStory)}>
        <Text style={[NavigatorStyles.navText, NavigatorStyles.storyText]}>
          Top Stories
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Navigator;
