import {useEffect, useState} from 'react';
import {Pagination} from '../types/Pagination';
import {Story} from '../types/Story';

export const usePaginatedStories = (
  initialPage = 1,
  limit = 10,
  storyFunc: (p: Pagination) => Promise<Story[]>,
) => {
  const [stories, setStories] = useState<Story[]>([]);
  const [page, setPage] = useState(initialPage);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchStories = async () => {
      setIsLoading(true);
      const newStories = await storyFunc({page, limit});
      setStories(prevStories => [...prevStories, ...newStories]);
      if (newStories.length < limit) {
        setHasMore(false);
      }
      setIsLoading(false);
    };

    fetchStories();
  }, [page, limit, storyFunc]);

  return {stories, isLoading, hasMore, setPage};
};
