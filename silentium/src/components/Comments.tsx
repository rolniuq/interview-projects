import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {useQueryGetCommentByIds} from '../apis/HttpServices';
import {TestID} from '../constants/Test';
import {CommentsStyle} from '../styles/CommentsStyle';
import {getDate} from '../utils';
import Spinner from './Spinner';

type Props = {
  testID: string;
  commentIds: number[];
};

const Comments = ({commentIds, testID}: Props) => {
  const {data: comments, isFetching} = useQueryGetCommentByIds(commentIds);

  return (
    <ScrollView testID={testID}>
      {isFetching ? (
        <Spinner testID={TestID.spinner} />
      ) : (
        comments?.map(comment => (
          <View key={comment.id} style={CommentsStyle.commentCard}>
            <Text style={CommentsStyle.authorText}>Author: {comment.by}</Text>
            <Text style={CommentsStyle.bodyText}>{comment.text}</Text>
            <Text style={CommentsStyle.dateText}>
              Created At: {getDate(comment.time)}
            </Text>
          </View>
        ))
      )}
    </ScrollView>
  );
};

export default Comments;
