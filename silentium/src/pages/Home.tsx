import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React, {useState} from 'react';
import {bestStory, newStory, topStory} from '../constants/Page';
import BestStories from './BestStories';
import NewStories from './NewStories';
import TopStories from './TopStories';

const queryClient = new QueryClient();

const Home = () => {
  const [value, setValue] = useState(newStory);

  return (
    <QueryClientProvider client={queryClient}>
      {value === newStory && <NewStories value={value} setValue={setValue} />}
      {value === topStory && <TopStories value={value} setValue={setValue} />}
      {value === bestStory && <BestStories value={value} setValue={setValue} />}
    </QueryClientProvider>
  );
};

export default Home;
