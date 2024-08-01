import {StyleSheet} from 'react-native';

export const pageStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 500,
  },
  spinner: {
    alignSelf: 'center',
  },
  storyItem: {
    backgroundColor: '#F8F9FA',
    borderRadius: 10,
    padding: 15,
    margin: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: 70,
  },
  selectedStory: {
    backgroundColor: '#E9ECEF',
    borderColor: '#CED4DA',
    borderWidth: 1,
  },
});
