import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useQueryGetStoryById} from '../apis/HttpServices';
import {TestID} from '../constants/Test';
import {ArticleStyle} from '../styles/ArticleStyle';
import {getDate} from '../utils';
import Comments from './Comments';
import Spinner from './Spinner';

type Props = {
  testID: string;
  storyId: number;
  back: () => void;
};

const Article = (props: Props) => {
  const {data: story, isFetching} = useQueryGetStoryById(props.storyId);

  return (
    <View testID={props.testID} style={ArticleStyle.articleContainer}>
      {isFetching ? (
        <Spinner testID={TestID.spinner} />
      ) : (
        <>
          <TouchableOpacity
            onPress={() => props.back()}
            style={ArticleStyle.backButton}>
            <Text style={ArticleStyle.backButtonText}>← Back</Text>
          </TouchableOpacity>
          <View style={ArticleStyle.storyInfoContainer}>
            <Text style={ArticleStyle.titleText}>
              Title: {story?.data.title}
            </Text>
            <Text style={ArticleStyle.bodyText}>
              Score: {story?.data.score}
            </Text>
            <Text style={ArticleStyle.bodyText}>
              Time: {getDate(story?.data.time)}
            </Text>
            <Text style={ArticleStyle.bodyText}>URL: {story?.data.url}</Text>
            <Text style={ArticleStyle.authorText}>
              Author: {story?.data.by}
            </Text>
          </View>
          <Text style={ArticleStyle.commentsHeader}>Comments:</Text>
          {story?.data.kids && (
            <Comments testID="Comments" commentIds={story?.data.kids} />
          )}
        </>
      )}
    </View>
  );
};

export default Article;
