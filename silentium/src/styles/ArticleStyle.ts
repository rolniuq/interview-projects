import {StyleSheet} from 'react-native';

export const ArticleStyle = StyleSheet.create({
  articleContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    borderRadius: 20,
  },
  backButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  storyInfoContainer: {
    width: '100%',
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 20,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bodyText: {
    fontSize: 18,
    marginBottom: 5,
  },
  authorText: {
    fontStyle: 'italic',
    marginTop: 10,
  },
  commentsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#2c3e50',
    alignSelf: 'flex-start',
  },
});
