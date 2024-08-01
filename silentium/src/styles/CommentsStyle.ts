import {StyleSheet} from 'react-native';

export const CommentsStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 10,
  },
  commentCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  authorText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 5,
  },
  bodyText: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 10,
  },
  dateText: {
    fontSize: 12,
    textAlign: 'right',
  },
});
