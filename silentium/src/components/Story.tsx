import React from 'react';
import {Text, View} from 'react-native';
import {StoryStyle} from '../styles/StoryStyle';
import {Story as IStory} from '../types/Story';

type Props = {
  story: IStory;
};

const Story = (props: Props) => {
  return (
    <View style={StoryStyle.container}>
      <Text>Title: {props.story.title}</Text>
      <Text>Author: {props.story.by}</Text>
    </View>
  );
};

export default Story;
