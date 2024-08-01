import React, {useState} from 'react';
import {getTopStories} from '../apis/HttpServices';
import {TestID} from '../constants/Test';
import {usePaginatedStories} from '../hooks/Paginated';
import StoryBody from './Body';

type Props = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const TopStories = (props: Props) => {
  const [selectedStoryId, setSelectedStoryId] = useState<number>(0);
  const {stories, isLoading, hasMore, setPage} = usePaginatedStories(
    1,
    10,
    getTopStories,
  );

  return (
    <StoryBody
      testID={TestID.body}
      selectedStoryId={selectedStoryId}
      setSelectedStoryId={setSelectedStoryId}
      hasMore={hasMore}
      isLoading={isLoading}
      setPage={setPage}
      value={props.value}
      setValue={props.setValue}
      stories={stories}
    />
  );
};

export default TopStories;
