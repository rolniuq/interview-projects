import React, {useState} from 'react';
import {getBestStories} from '../apis/HttpServices';
import {TestID} from '../constants/Test';
import {usePaginatedStories} from '../hooks/Paginated';
import StoryBody from './Body';

type Props = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const BestStories = (props: Props) => {
  const [selectedStoryId, setSelectedStoryId] = useState<number>(0);
  const {stories, isLoading, hasMore, setPage} = usePaginatedStories(
    1,
    10,
    getBestStories,
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

export default BestStories;
