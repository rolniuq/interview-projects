import React from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import Article from '../components/Article';
import Navigator from '../components/Navigator';
import Spinner from '../components/Spinner';
import Story from '../components/Story';
import {TestID} from '../constants/Test';
import {pageStyles} from '../styles/PageStyle';
import {Story as IStory} from '../types/Story';

type Props = {
  testID: string;
  selectedStoryId: number;
  setSelectedStoryId: React.Dispatch<React.SetStateAction<number>>;
  stories: IStory[];
  isLoading: boolean;
  hasMore: boolean;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const StoryBody = ({
  testID,
  hasMore,
  isLoading,
  value,
  stories,
  selectedStoryId,
  setPage,
  setValue,
  setSelectedStoryId,
}: Props) => {
  const back = () => {
    setSelectedStoryId(0);
  };

  const loadMoreStories = () => {
    if (hasMore && !isLoading) {
      setPage(prevPage => prevPage + 1);
    }
  };

  const renderFooter = () => {
    if (!isLoading) {
      return null;
    }

    return <Spinner testID={TestID.spinner} />;
  };

  return (
    <>
      {selectedStoryId === 0 && (
        <Navigator
          testID={TestID.navigator}
          value={value}
          setValue={setValue}
        />
      )}
      <View testID={testID} style={pageStyles.container}>
        {isLoading && stories.length === 0 ? (
          <Spinner testID={TestID.spinner} />
        ) : (
          <>
            {selectedStoryId === 0 ? (
              <FlatList
                testID={TestID.flatList}
                data={stories}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => (
                  <TouchableOpacity
                    style={[
                      pageStyles.storyItem,
                      selectedStoryId === item.id && pageStyles.selectedStory,
                    ]}
                    onPress={() => setSelectedStoryId(item.id)}>
                    <Story story={item} />
                  </TouchableOpacity>
                )}
                onEndReached={loadMoreStories}
                onEndReachedThreshold={0.5}
                ListFooterComponent={renderFooter}
              />
            ) : (
              <Article
                testID={TestID.article}
                storyId={selectedStoryId}
                back={back}
              />
            )}
          </>
        )}
      </View>
    </>
  );
};

export default StoryBody;
