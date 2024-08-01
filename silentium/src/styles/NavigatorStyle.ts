import {StyleSheet} from 'react-native';

export const NavigatorStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  navText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    padding: 10,
  },
  storyText: {
    backgroundColor:
      'linear-gradient(90deg, rgba(0,123,255,1) 0%, rgba(0,204,255,1) 100%)',
    borderRadius: 5,
  },
});
